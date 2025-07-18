import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Charmeleon",
         ja: "ダークチャームレオン",
         fr: "Charmeleon sombre",
         de: "Dunkler Charmeleon",
         es: "Encantador oscuro",
         it: "Dark Charmeleon",
         pt: "Charmeleon escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [5],
      hp: 50,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tail Slap",
            ja: "テールスラップ",
            fr: "Gifle",
            de: "Schwanzschlag",
            es: "Bofetada",
            it: "Slap di coda",
            pt: "Tail Slap",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Fireball",
            ja: "火の玉",
            fr: "Boule de feu",
            de: "Feuerball",
            es: "Bola de fuego",
            it: "Bolide",
            pt: "Bola de fogo",
          },
          effect: {
            en: "Flip a coin. If heads, discard a Fire Energy card attached to this Pokemon. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。頭の場合は、このポケモンに取り付けられた火災エネルギーカードを捨ててください。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si les têtes, jetez une carte d'énergie d'incendie attachée à ce pokemon. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, entsorgen Sie eine an diesem Pokémon angeschlossene Feuerergiekarte. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si se dirige, deseche una tarjeta de energía de fuego unida a este Pokémon. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se la testa, scartare una carta di energia antincendio attaccata a questo Pokemon. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se as cabeças, descarte um cartão de energia de incêndio anexado a este Pokémon. Se caudas, esse ataque não faz nada.",
          },
          damage: 70,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
