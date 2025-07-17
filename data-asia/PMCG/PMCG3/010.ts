import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Psyduck",
         ja: "Psyduck",
         fr: "Psyde",
         de: "Psyduck",
         es: "Psíquico",
         it: "Psyduck",
         pt: "Psyduck",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [54],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Headache",
            ja: "頭痛",
            fr: "Mal de tête",
            de: "Kopfschmerzen",
            es: "Dolor de cabeza",
            it: "Mal di testa",
            pt: "Dor de cabeça",
          },
          effect: {
            en: "Your opponent can't play Trainer cards during his or her next turn.",
            ja: "対戦相手は、次のターン中にトレーナーカードをプレイできません。",
            fr: "Votre adversaire ne peut pas jouer aux cartes d'entraîneur lors de son prochain tour.",
            de: "Ihr Gegner kann während seiner nächsten Kurve keine Trainerkarten spielen.",
            es: "Tu oponente no puede jugar cartas de entrenador durante su próximo turno.",
            it: "Il tuo avversario non può giocare a carte di allenatore durante il suo prossimo turno.",
            pt: "Seu oponente não pode jogar cartas de treinador durante o próximo turno.",
          },

        },
        {
          cost: ["Water"],
          name: {
            en: "Fury Swipes",
            ja: "フューリースワイプ",
            fr: "Fureur glissa",
            de: "Wut wischt",
            es: "Furia golpea",
            it: "Fury Swipes",
            pt: "Fury Swipes",
          },
          effect: {
            en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },

        },
      ],

      retreat: 1,

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
