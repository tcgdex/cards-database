import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Suicune Star",
         ja: "Suicune Star",
         fr: "Star suicine",
         de: "Suicune Star",
         es: "Estrella suicunta",
         it: "STAR suicune",
         pt: "Estrela suicune",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [245],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Splashing Turn",
            ja: "スプラッシングターン",
            fr: "Éclaboussure",
            de: "Spritzerwendung",
            es: "Giro de salpicaduras",
            it: "Turning di schizzi",
            pt: "Virada de respingo",
          },
          effect: {
            en: "Switch Suicune {{star|this Pokemon}} with 1 of your Benched Pokemon.",
            ja: "1つのベンチポケモンを使用して、suicune {{star | this pokemon}}を切り替えます。",
            fr: "Switch SuiCune {{Star | Ce pokemon}} avec 1 de votre pokemon banc.",
            de: "SCHALTEN SIE SUICUNE {{STAR | Dieses Pokemon}} mit 1 Ihrer Bank -Pokemon.",
            es: "Cambie suicune {{estrella | este pokemon}} con 1 de su pokemon de banca.",
            it: "Switch Suicune {{Star | questo Pokemon}} con 1 del tuo Pokemon in panchina.",
            pt: "Switch suicune {{star | this Pokemon}} com 1 do seu Pokemon em bancada.",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Cross Wind",
            ja: "交差風",
            fr: "Croiser",
            de: "WEFT WIND",
            es: "Viento cruzado",
            it: "Vento incrociato",
            pt: "Vento cruzado",
          },
          effect: {
            en: "If you have less Prize cards left than your opponent, discard all Energy cards attached to all of your Pokemon.",
            ja: "対戦相手よりも賞品が少ない場合は、すべてのポケモンに取り付けられたすべてのエネルギーカードを捨ててください。",
            fr: "S'il vous reste moins de cartes de prix que votre adversaire, jetez toutes les cartes d'énergie attachées à tous vos pokemon.",
            de: "Wenn Sie weniger Preiskarten mehr haben als Ihr Gegner, werfen Sie alle an alle Ihr Pokémon angeschlossenen Energiekarten ab.",
            es: "Si le quedan menos tarjetas de premios que tu oponente, deseche todas las tarjetas de energía adjuntas a todos tus Pokémon.",
            it: "Se hai meno carte premiate rispetto al tuo avversario, scartare tutte le carte di energia collegate a tutti i tuoi Pokemon.",
            pt: "Se você tiver menos cartões de prêmios que o seu oponente, descarte todos os cartões de energia anexados a todos os seus Pokémon.",
          },
          damage: 70,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
