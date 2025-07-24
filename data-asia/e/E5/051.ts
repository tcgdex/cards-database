import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Machoke",
         ja: "マチョーク",
         fr: "Machoke",
         de: "Machoke",
         es: "Machoke",
         it: "Machoke",
         pt: "Machoke",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [67],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Focus Energy",
            ja: "フォーカスエネルギー",
            fr: "Concentrer l'énergie",
            de: "Konzentrationsenergie",
            es: "Energía de enfoque",
            it: "Focus Energy",
            pt: "Foco em energia",
          },
          effect: {
            en: "During your next turn, Machoke's Mega Punch attack's base damage is 80.",
            ja: "次のターン中、マチョークのメガパンチ攻撃のベースダメージは80です。",
            fr: "Au cours de votre prochain tour, les dégâts de base de Machoke Mega Punch Attack sont de 80.",
            de: "Während Ihrer nächsten Kurve beträgt der Grundschaden von Machoke Mega Punch Attack 80.",
            es: "Durante su próximo turno, el daño básico de Megake Punch Attack es 80.",
            it: "Durante il tuo prossimo turno, il danno base di Mega Punch Attack di Machoke è 80.",
            pt: "Durante o seu próximo turno, o dano da mega ataque de Machoke é 80.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Mega Punch",
            ja: "メガパンチ",
            fr: "Mega Punch",
            de: "Mega Punch",
            es: "Mega Punch",
            it: "Mega pugno",
            pt: "Mega soco",
          },
          damage: 40,
        },
      ],

      retreat: 1,

};
