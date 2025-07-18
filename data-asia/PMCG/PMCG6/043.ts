import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Abra",
         ja: "サブリナのアブラ",
         fr: "Abra de Sabrina",
         de: "Sabrinas Abra",
         es: "Abra de Sabrina",
         it: "Sabrina's Abra",
         pt: "Abra de Sabrina",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [63],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Energy Loop",
            ja: "エネルギーループ",
            fr: "Boucle d'énergie",
            de: "Energieschleife",
            es: "Bucle de energía",
            it: "Ciclo di energia",
            pt: "Loop de energia",
          },
          effect: {
            en: "Return a Psychic Energy card attached to Sabrina's Abra to your hand in order to use this attack.",
            ja: "この攻撃を使用するために、サブリナのアブラに取り付けられたサイキックエネルギーカードを手に返してください。",
            fr: "Renvoyez une carte d'énergie psychique attachée à Abra de Sabrina à votre main afin d'utiliser cette attaque.",
            de: "Geben Sie eine psychische Energiekarte zurück, die an Sabrinas Abra an Ihre Hand gebunden ist, um diesen Angriff zu verwenden.",
            es: "Devuelve una tarjeta de energía psíquica unida a la Abra de Sabrina a tu mano para usar este ataque.",
            it: "Restituisci una carta di energia psichica collegata a Sabrina Abra alla tua mano per usare questo attacco.",
            pt: "Retorne um cartão de energia psíquica ligado ao Abra de Sabrina à sua mão para usar esse ataque.",
          },
          damage: 20,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
