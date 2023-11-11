export interface QuestionModel {
  id: number;
  question: string;
  point: number;
  answers: answersModel[];
}

interface answersModel {
  title: string;
  isCorrect: boolean
}
