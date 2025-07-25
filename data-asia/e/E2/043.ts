import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Mr. Mime",
         ja: "マイムさん",
         fr: "M. MIME",
         de: "Mr. Mime",
         es: "Sr. Mime",
         it: "Sig. Mime",
         pt: "Sr. Mime",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [122],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Energy Barrier",
            ja: "エネルギー障壁",
            fr: "Barrière d'énergie",
            de: "Energiebarriere",
            es: "Barrera de energía",
            it: "Barriera energetica",
            pt: "Barreira energética",
          },
          effect: {
            en: "If Mr. Mime would be damaged by an attack, reduce that damage by 10 for each basic Energy card attached to Mr. Mime. The maximum amount of damage that can be reduced by Energy Barrier is 20.",
            ja: "Mime氏が攻撃によって損傷を受けた場合、Mime氏に取り付けられた基本エネルギーカードごとにそのダメージを10倍に減らします。エネルギー障壁によって減少する可能性のある損傷の最大量は20です。",
            fr: "Si M. Mime était endommagé par une attaque, réduisez ces dégâts de 10 pour chaque carte d'énergie de base attachée à M. Mime. La quantité maximale de dommages qui peuvent être réduites par la barrière d'énergie est de 20.",
            de: "Wenn Mr. Mime durch einen Angriff beschädigt würde, verringern Sie diesen Schaden für jede an Herrn Mime angeschlossene grundlegende Energiekarte um 10. Die maximale Menge an Schäden, die durch Energiebarriere verringert werden können, beträgt 20.",
            es: "Si el Sr. Mime fuera dañado por un ataque, reduzca ese daño en 10 por cada tarjeta de energía básica adjunta al Sr. Mime. La cantidad máxima de daño que puede reducirse por la barrera de energía es 20.",
            it: "Se il signor Mime sarebbe danneggiato da un attacco, ridurre quel danno di 10 per ogni carta di energia di base collegata al signor Mime. La quantità massima di danno che può essere ridotta dalla barriera energetica è 20.",
            pt: "Se o Sr. Mime for danificado por um ataque, reduza esse dano em 10 para cada cartão de energia básico anexado ao Sr. Mime. A quantidade máxima de dano que pode ser reduzida pela barreira de energia é 20.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Mind Shock",
            ja: "マインドショック",
            fr: "Choc mental",
            de: "Geistesschock",
            es: "Meta Choque",
            it: "Shock mentale",
            pt: "Choque da mente",
          },
          effect: {
            en: "Don't apply Weakness and Resistance.",
            ja: "衰弱と抵抗を適用しないでください。",
            fr: "N'appliquez pas la faiblesse et la résistance.",
            de: "Wenden Sie keine Schwäche und Widerstand an.",
            es: "No aplique debilidad y resistencia.",
            it: "Non applicare debolezza e resistenza.",
            pt: "Não aplique fraqueza e resistência.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

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
