import { it, expect } from '@jest/globals';
import { render, screen } from '@/test-utils/testing-library';
import * as formDataMocks from '@/fixtures/rank-calculator/form-data';
import { MockFormProvider } from '@/test-utils/mock-form-provider';
import { generatePlayerTests } from '@/test-utils/generate-player-tests';
import { skillingExpectedValues } from '@/fixtures/rank-calculator/skilling-expected-values';
import { SkillingCard } from './skilling-card';

generatePlayerTests(
  formDataMocks,
  skillingExpectedValues,
  (formData, expected) => {
    beforeEach(async () => {
      render(
        <MockFormProvider defaultValues={formData}>
          <SkillingCard />
        </MockFormProvider>,
      );

      await screen.findByRole('heading', { name: /skilling/i });
    });

    it('renders the total points', () => {
      expect(
        screen.getByLabelText(/^total skilling points$/i).textContent,
      ).toBe(`${expected.pointsAwarded}`);
    });

    it('renders the points remaining', () => {
      expect(
        screen.getByLabelText(/^skilling points remaining$/i).textContent,
      ).toBe(`(${expected.pointsRemaining})`);
    });

    it('renders the point competion percentage', () => {
      expect(
        screen.getByLabelText(/^skilling point completion percentage$/i)
          .textContent,
      ).toBe(`${expected.pointsAwardedPercentage}%`);
    });

    it('renders the EHP points', () => {
      expect(
        screen.getByLabelText(/^efficient hours played points$/i).textContent,
      ).toBe(`${expected.ehpPoints}`);
    });

    it('renders the total level points', () => {
      expect(screen.getByLabelText(/^total level points$/i).textContent).toBe(
        `${expected.totalLevelPoints}`,
      );
    });

    it('renders the achievement diary points', () => {
      Object.entries(expected.achievementDiariesPoints).forEach(
        ([diaryLocation, points]) => {
          const matcher = new RegExp(`${diaryLocation} diary points`, 'i');

          expect(screen.getByLabelText(matcher).textContent).toBe(`${points}`);
        },
      );
    });
  },
);
