import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Beldum (Delta Species)",
         ja: "ベルダム（デルタ種）",
         fr: "Beldum (espèces delta)",
         de: "Beldum (Delta -Arten)",
         es: "Beldum (especie delta)",
         it: "Beldum (Delta Species)",
         pt: "Beldum (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [374],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Conductive Body",
            ja: "導電性ボディ",
            fr: "Corps conducteur",
            de: "Leitfähiger Körper",
            es: "Cuerpo conductor",
            it: "Corpo conduttivo",
            pt: "Corpo condutor",
          },
          effect: {
            en: "As long as Beldum is your Active PokÃ©mon, you pay Colorless less to retreat Beldum for each Beldum on your Bench.",
            ja: "ベルダムがあなたのアクティブなポケモンである限り、あなたはあなたのベンチの各ベルダムのベルダムを後退させるために無色の少ない支払いをします。",
            fr: "Tant que Beldum est votre poké actif, vous payez moins incolore pour retirer Beldum pour chaque beldum sur votre banc.",
            de: "Solange Beldum Ihr aktiver Poké Mon Mon ist, zahlen Sie weniger farblos, um Beldum für jedes Beldum auf Ihrer Bank zurückzuziehen.",
            es: "Mientras Beldum sea su Poké Mon activo, paga menos incoloro para retirarse a Beldum por cada Beldum en su banco.",
            it: "Finché Beldum è il tuo poké attivo, paghi meno incolori per ritirare Beldum per ogni beldum sulla panchina.",
            pt: "Enquanto Beldum for o seu Poké de Mon ativo, você paga menos incolor para recuar Beldum por cada Beldum em seu banco.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Take Down",
            ja: "降ろす",
            fr: "Démonter",
            de: "Notieren",
            es: "Derribar",
            it: "Prendere nota",
            pt: "Derrubar",
          },
          effect: {
            en: "Beldum does 10 damage to itself.",
            ja: "Beldumはそれ自体に10ダメージを与えます。",
            fr: "Beldum fait 10 dégâts à lui-même.",
            de: "Beldum schädigt sich 10.",
            es: "Beldum hace 10 daños a sí mismo.",
            it: "Beldum fa 10 danni a se stesso.",
            pt: "Beldum causa 10 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
