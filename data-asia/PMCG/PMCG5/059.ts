import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Raticate",
         ja: "サージ中t",
         fr: "Raticate du lieutenant",
         de: "Lt. Surge's Ratatate",
         es: "Raticate del teniente Surge",
         it: "Tenente raticata di Surge",
         pt: "Raticato do tenente Surge",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [20],
      hp: 60,
      types: ["Colorless"],
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
            en: "During your next turn, Lt. Surge's Raticate's Double-edge attack's damage (base damage and damage to itself) is doubled.",
            ja: "次のターン中に、SurgeのRaticateのダブルエッジ攻撃の損傷（基本的な損傷とそれ自体への損傷）が2倍になります。",
            fr: "Au cours de votre prochain tour, le lieutenant-double de l'attaque à double bord de Raticate du lieutenant (les dégâts de base et les dégâts à lui-même) sont doublés.",
            de: "Während Ihrer nächsten Runde wird der Schaden von Lt. Surge's Raticate's Doppelkante (Basisschäden und Schaden an sich selbst) verdoppelt.",
            es: "Durante su próximo turno, se duplica el daño de doble ataque de Raticate del teniente Surge (daño base y daño a sí mismo).",
            it: "Durante il turno successivo, il danno di Attack a doppio bordo del tenente Surge (danno base e danno a se stesso) è raddoppiato.",
            pt: "Durante o seu próximo turno, o dano do ataque de dupla vantagem do tenente Surge (dano de base e dano a si mesmo) é dobrado.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double-edge",
            ja: "ダブルエッジ",
            fr: "À double bord",
            de: "Doppelkante",
            es: "De doble borde",
            it: "Doppio bordo",
            pt: "Dupla borda",
          },
          effect: {
            en: "Lt. Surge's Raticate does 20 damage to itself.",
            ja: "SurgeのRaticate中tはそれ自体に20のダメージを与えます。",
            fr: "Le lieutenant-chirurant le lieutenant se fait 20 dégâts.",
            de: "Lt. Surge's Raticate schädigt 20 Schäden an sich.",
            es: "El raticato del teniente Surge hace 20 daños a sí mismo.",
            it: "Il raticata di Ten. Surge fa 20 danni a se stesso.",
            pt: "O raticato do tenente Surge causa 20 danos a si mesmo.",
          },
          damage: 40,
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
