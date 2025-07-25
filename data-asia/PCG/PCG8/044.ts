import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Combusken",
         ja: "Combusken",
         fr: "Combattant",
         de: "Kombusken",
         es: "Combusken",
         it: "Combusken",
         pt: "Combusken",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [256],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting"],
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
            en: "During your next turn, Combusken's High Jump Kick attack's base damage is 70.",
            ja: "次のターン中、CombuskenのHigh Jamg Kick Attackのベースダメージは70です。",
            fr: "Au cours de votre prochain tour, les dégâts de base de la base du coup de pied en hauteur de combusken sont de 70.",
            de: "Während Ihrer nächsten Kurve beträgt der Basisschaden von Combuskens Hochsprung -Kick -Angriff 70.",
            es: "Durante su próximo turno, el daño base del ataque de patada de salto de salto de Combusken es 70.",
            it: "Durante il tuo prossimo turno, il danno base di Base Attack di Combusken High Jump Attack è 70.",
            pt: "Durante o seu próximo turno, o dano básico de Jump High Jump de Combusken é 70.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "High Jump Kick",
            ja: "ハイジャンプキック",
            fr: "Coup de pied de saut en hauteur",
            de: "Hochsprung -Kick",
            es: "Patada de salto de altura",
            it: "Calcio di salto in alto",
            pt: "Kick de salto em altura",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
