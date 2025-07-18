import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Shelgon",
         ja: "シェルゴン",
         fr: "Shelgon",
         de: "Shelgon",
         es: "Shelgon",
         it: "Shelgon",
         pt: "Shelgon",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [372],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Hard Protection",
            ja: "難しい保護",
            fr: "Protection dure",
            de: "Harter Schutz",
            es: "Protección dura",
            it: "Protezione dura",
            pt: "Proteção dura",
          },
          effect: {
            en: "Prevent all damage done to Shelgon by attacks from your PokÃ©mon.",
            ja: "ポカンからの攻撃によってシェルゴンに与えられたすべての損害を防ぎます。",
            fr: "Empêchez tous les dommages causés à Shelgon par les attaques de votre poké.",
            de: "Verhindern Sie alle Schäden, die Shelgon durch Angriffe aus Ihrem Poké Mon Mon angerichtet haben.",
            es: "Evite todo el daño causado a Shelgon mediante ataques de su Poké Mon.",
            it: "Prevenire tutti i danni arrecati a Shelgon dagli attacchi dal tuo poké mon.",
            pt: "Evite todos os danos causados a Shelgon por ataques do seu Poké MON.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Water"],
          name: {
            en: "Rock Smash",
            ja: "ロックスマッシュ",
            fr: "Smash rock",
            de: "Rock Smash",
            es: "Rock smash",
            it: "Rock Smash",
            pt: "Rock Smash",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 10 altri danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 10 mais danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
