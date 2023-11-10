export interface QuestionModel {
  question: string;
  index: number;
  answers: answersModel[];
  point: number
}

interface answersModel {
  title: string;
  isCorrect: boolean
}
