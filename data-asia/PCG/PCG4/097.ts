import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Professor Elm's Training Method",
         ja: "エルム教授のトレーニング方法",
         fr: "Méthode de formation du professeur Elm",
         de: "Trainingsmethode von Professor Elm",
         es: "Método de entrenamiento del profesor Elm",
         it: "Metodo di formazione del professor Elm",
         pt: "Método de treinamento do professor Elm",
      },

      rarity: "Uncommon",
      category: "Trainer",

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
