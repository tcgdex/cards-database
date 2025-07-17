import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Flareon",
         ja: "フレアロン",
         fr: "Flareon",
         de: "Flareon",
         es: "Escaparrón",
         it: "Flareon",
         pt: "Flareon",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [136],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos; Se caudas, esse ataque causa 10 danos.",
          },

        },
        {
          cost: ["Fire", "Fire", "Colorless", "Colorless"],
          name: {
            en: "Flamethrower",
            ja: "火炎放射器",
            fr: "Lance-flammes",
            de: "Flammenwerfer",
            es: "Echador de llama",
            it: "Lanciafiamme",
            pt: "Lança -chamas",
          },
          effect: {
            en: "Discard 1 Fire Energy card attached to Flareon or this attack does nothing.",
            ja: "Flareonに取り付けられた1つのファイアエネルギーカードを廃棄すると、この攻撃は何もしません。",
            fr: "Jetez 1 carte d'énergie de feu attachée à Flareon ou cette attaque ne fait rien.",
            de: "Mit Flareon befestigte Brandenergiekarte verwerfen oder dieser Angriff nichts tut.",
            es: "Deseche 1 tarjeta de energía de fuego unida a Flareon o este ataque no hace nada.",
            it: "Scartare 1 carta di energia antincendio attaccata a Flareon o questo attacco non fa nulla.",
            pt: "Descarte 1 cartão de energia de incêndio anexado ao flareon ou esse ataque não faz nada.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
