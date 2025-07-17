import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "The Rocket's Training Gym",
         ja: "ロケットのトレーニングジム",
         fr: "Le gymnase d'entraînement de la fusée",
         de: "Das Trainings -Fitnessstudio der Rakete",
         es: "El gimnasio de entrenamiento del cohete",
         it: "La palestra di allenamento del razzo",
         pt: "A academia de treinamento do foguete",
      },

      rarity: "Rare",
      category: "Trainer",

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
