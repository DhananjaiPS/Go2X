import { create } from 'zustand'

export interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  topic: string
}

export type QuizPhase = 'idle' | 'stack-select' | 'loading' | 'active' | 'submitted'
export type PerformanceLevel = 'Beginner' | 'Intermediate' | 'Interview Ready'
export type TechStack = 'webdev' | 'datascience' | 'aiml'

interface DayRecord {
  day: number
  score: number
  accuracy: number
  stack: TechStack
}

interface QuizStore {
  phase: QuizPhase
  selectedStack: TechStack | null
  questions: Question[]
  currentQuestion: number
  answers: (number | null)[]
  score: number
  accuracy: number
  timeLeft: number
  timerActive: boolean
  performanceLevel: PerformanceLevel
  points: number
  streak: number
  currentDay: number
  dailyCompleted: boolean
  completedDays: DayRecord[]
  progress: number

  openStackSelect: () => void
  selectStack: (stack: TechStack) => void
  startTest: () => void
  setAnswer: (questionIndex: number, optionIndex: number) => void
  nextQuestion: () => void
  prevQuestion: () => void
  submitTest: () => void
  tickTimer: () => void
  simulateNextDay: () => void
}

const WEB_DEV_QUESTIONS: Question[] = [
  { id: 1, question: 'Which CSS property creates a flex container?', options: ['display: flex', 'position: flex', 'layout: flex', 'align: flex'], correct: 0, topic: 'CSS' },
  { id: 2, question: 'In React, what hook fetches data and runs side effects?', options: ['useState', 'useRef', 'useEffect', 'useMemo'], correct: 2, topic: 'React' },
  { id: 3, question: "Which HTTP status code means 'Not Found'?", options: ['200', '301', '404', '500'], correct: 2, topic: 'HTTP' },
  { id: 4, question: 'What does DOM stand for?', options: ['Document Object Model', 'Data Object Map', 'Dynamic Object Module', 'Document Order Map'], correct: 0, topic: 'Web' },
  { id: 5, question: 'Which JavaScript method removes the last element of an array?', options: ['shift()', 'pop()', 'splice()', 'slice()'], correct: 1, topic: 'JavaScript' },
  { id: 6, question: "What does 'async/await' help manage in JavaScript?", options: ['Styling', 'Routing', 'Asynchronous operations', 'State management'], correct: 2, topic: 'JavaScript' },
  { id: 7, question: 'Which HTML tag is used for a hyperlink?', options: ['<link>', '<a>', '<href>', '<url>'], correct: 1, topic: 'HTML' },
  { id: 8, question: 'What is the output of typeof [] in JavaScript?', options: ['array', 'object', 'list', 'undefined'], correct: 1, topic: 'JavaScript' },
  { id: 9, question: 'Which CSS value centers a block element horizontally?', options: ['text-align: center', 'margin: auto', 'align: center', 'justify: center'], correct: 1, topic: 'CSS' },
  { id: 10, question: 'In Node.js, which module is used to create an HTTP server?', options: ['fs', 'path', 'http', 'net'], correct: 2, topic: 'Node.js' },
]

const DATA_SCIENCE_QUESTIONS: Question[] = [
  { id: 1, question: 'Which Python library is used for data manipulation with DataFrames?', options: ['NumPy', 'Matplotlib', 'Pandas', 'SciPy'], correct: 2, topic: 'Python' },
  { id: 2, question: "What does 'NaN' stand for in data analysis?", options: ['Not a Number', 'Null and None', 'Numeric Array Node', 'No Active Null'], correct: 0, topic: 'Data' },
  { id: 3, question: 'Which algorithm is used for supervised classification?', options: ['K-Means', 'PCA', 'Decision Tree', 'DBSCAN'], correct: 2, topic: 'ML' },
  { id: 4, question: 'What is the purpose of train/test split in ML?', options: ['Speed up training', 'Avoid overfitting and evaluate generalization', 'Reduce dataset size', 'Increase accuracy always'], correct: 1, topic: 'ML' },
  { id: 5, question: 'Which metric measures the average squared error?', options: ['MAE', 'RMSE', 'MSE', 'R²'], correct: 2, topic: 'Statistics' },
  { id: 6, question: "What does 'correlation' measure between two variables?", options: ['Causation', 'Linear relationship strength', 'Mean difference', 'Variance'], correct: 1, topic: 'Statistics' },
  { id: 7, question: 'Which visualization library is most commonly used in Python for plotting?', options: ['Seaborn', 'Matplotlib', 'Plotly', 'Bokeh'], correct: 1, topic: 'Visualization' },
  { id: 8, question: "What is 'feature engineering' in machine learning?", options: ['Selecting a model', 'Creating/transforming input variables', 'Tuning hyperparameters', 'Splitting data'], correct: 1, topic: 'ML' },
  { id: 9, question: 'Which SQL clause filters grouped results?', options: ['WHERE', 'GROUP BY', 'HAVING', 'ORDER BY'], correct: 2, topic: 'SQL' },
  { id: 10, question: "What is 'overfitting' in a machine learning model?", options: ['Model is too simple', 'Model performs well on training but poorly on new data', 'Model trains too slowly', 'Model has too few parameters'], correct: 1, topic: 'ML' },
]

const AIML_QUESTIONS: Question[] = [
  { id: 1, question: 'What activation function is used in the output layer for binary classification?', options: ['ReLU', 'Tanh', 'Sigmoid', 'Softmax'], correct: 2, topic: 'Neural Networks' },
  { id: 2, question: "What does 'backpropagation' do in a neural network?", options: ['Initializes weights', 'Feeds data forward', 'Computes and propagates gradients', 'Selects activation functions'], correct: 2, topic: 'Deep Learning' },
  { id: 3, question: 'Which architecture is the foundation of modern LLMs like GPT?', options: ['RNN', 'LSTM', 'Transformer', 'CNN'], correct: 2, topic: 'LLMs' },
  { id: 4, question: "What is 'transfer learning' in AI?", options: ['Sending model weights via API', 'Reusing a pre-trained model for a new task', 'Transferring data between servers', 'Training on multiple GPUs'], correct: 1, topic: 'Deep Learning' },
  { id: 5, question: 'Which optimizer adaptively scales learning rates per parameter?', options: ['SGD', 'Momentum', 'Adam', 'RMSProp'], correct: 2, topic: 'Optimization' },
  { id: 6, question: "What is 'attention mechanism' in transformers?", options: ['Filtering irrelevant neurons', 'Weighting input token importance for each output', 'Normalizing activations', 'Dropout regularization'], correct: 1, topic: 'Transformers' },
  { id: 7, question: 'Which technique prevents overfitting by randomly zeroing neurons during training?', options: ['Batch Normalization', 'L2 Regularization', 'Dropout', 'Early Stopping'], correct: 2, topic: 'Regularization' },
  { id: 8, question: 'What does GAN stand for?', options: ['Gradient Activation Network', 'Generative Adversarial Network', 'General AI Node', 'Graph Attention Network'], correct: 1, topic: 'Generative AI' },
  { id: 9, question: "In reinforcement learning, what does the 'reward' represent?", options: ["Model loss", "Feedback signal for agent's action", 'Training batch size', 'Activation value'], correct: 1, topic: 'RL' },
  { id: 10, question: 'Which distance metric is commonly used in KNN algorithm?', options: ['Manhattan', 'Euclidean', 'Cosine', 'All of these'], correct: 3, topic: 'ML' },
]

const QUESTIONS_BY_STACK: Record<TechStack, Question[]> = {
  webdev: WEB_DEV_QUESTIONS,
  datascience: DATA_SCIENCE_QUESTIONS,
  aiml: AIML_QUESTIONS,
}

const QUIZ_DURATION = 10 * 60

const getPerformanceLevel = (accuracy: number): PerformanceLevel => {
  if (accuracy > 80) return 'Interview Ready'
  if (accuracy >= 50) return 'Intermediate'
  return 'Beginner'
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  phase: 'idle',
  selectedStack: null,
  questions: [],
  currentQuestion: 0,
  answers: [],
  score: 0,
  accuracy: 0,
  timeLeft: QUIZ_DURATION,
  timerActive: false,
  performanceLevel: 'Beginner',
  points: 0,
  streak: 0,
  currentDay: 1,
  dailyCompleted: false,
  completedDays: [],
  progress: 0,

  openStackSelect: () => {
    const { dailyCompleted } = get()
    if (dailyCompleted) return
    set({ phase: 'stack-select' })
  },

  selectStack: (stack) => {
    set({ selectedStack: stack, phase: 'loading' })
    const questions = QUESTIONS_BY_STACK[stack]
    setTimeout(() => {
      set({
        phase: 'active',
        questions,
        currentQuestion: 0,
        answers: new Array(questions.length).fill(null),
        score: 0,
        accuracy: 0,
        timeLeft: QUIZ_DURATION,
        timerActive: true,
      })
    }, 1500)
  },

  startTest: () => {
    set({ phase: 'stack-select' })
  },

  setAnswer: (questionIndex, optionIndex) => {
    const answers = [...get().answers]
    answers[questionIndex] = optionIndex
    set({ answers })
  },

  nextQuestion: () => {
    const { currentQuestion, questions } = get()
    if (currentQuestion < questions.length - 1) {
      set({ currentQuestion: currentQuestion + 1 })
    }
  },

  prevQuestion: () => {
    const { currentQuestion } = get()
    if (currentQuestion > 0) {
      set({ currentQuestion: currentQuestion - 1 })
    }
  },

  submitTest: () => {
    const { questions, answers, selectedStack, currentDay, streak, points, completedDays } = get()
    const score = answers.reduce<number>((acc, ans, i) => {
      return ans === questions[i].correct ? acc + 1 : acc
    }, 0)
    const accuracy = Math.round((score / questions.length) * 100)
    const earnedPoints = score * 100
    const performanceLevel = getPerformanceLevel(accuracy)

    const dayRecord: DayRecord = {
      day: currentDay,
      score,
      accuracy,
      stack: selectedStack!,
    }

    set({
      phase: 'submitted',
      score,
      accuracy,
      performanceLevel,
      timerActive: false,
      points: points + earnedPoints,
      streak: streak + 1,
      dailyCompleted: true,
      completedDays: [...completedDays, dayRecord],
      progress: (completedDays.length + 1) / 50,
    })
  },

  tickTimer: () => {
    const { timeLeft, timerActive } = get()
    if (!timerActive) return
    if (timeLeft <= 1) {
      get().submitTest()
      return
    }
    set({ timeLeft: timeLeft - 1 })
  },

  simulateNextDay: () => {
    const { currentDay } = get()
    if (currentDay >= 50) return
    set({
      currentDay: currentDay + 1,
      dailyCompleted: false,
      phase: 'idle',
      questions: [],
      currentQuestion: 0,
      answers: [],
      score: 0,
      accuracy: 0,
      timeLeft: QUIZ_DURATION,
      timerActive: false,
      selectedStack: null,
    })
  },
}))
