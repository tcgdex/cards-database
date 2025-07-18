import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Latias Star",
         ja: "ラティアススター",
         fr: "Étoile des Latias",
         de: "Latias Star",
         es: "Estrella de latias",
         it: "Latias Star",
         pt: "Estrela Latias",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [380],
      hp: 80,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Healing Light",
            ja: "癒しの光",
            fr: "Lumière de guérison",
            de: "Heilendes Licht",
            es: "Luz curativa",
            it: "Luce di guarigione",
            pt: "Luz de cura",
          },
          effect: {
            en: "Remove 1 damage counter from each of your Pokemon (including Latias {{Star|this Pokemon}}).",
            ja: "各ポケモンから1つのダメージカウンターを削除します（{{star | this pokemon}}を含む）。",
            fr: "Retirez 1 compteur de dégâts de chacun de vos Pokémon (y compris Latias {{Star | Ce pokemon}}).",
            de: "Entfernen Sie 1 Schadenschalter von jedem Ihrer Pokemon (einschließlich Latias {{Stern | dieses Pokemon}}).",
            es: "Retire 1 contador de daño de cada uno de sus Pokémon (incluidas Latias {{Star | This Pokemon}}).",
            it: "Rimuovi 1 contatore di danni da ciascuno dei tuoi Pokemon (incluso Latias {{Star | this Pokemon}}).",
            pt: "Remova 1 contador de danos de cada um dos seus Pokemon (incluindo latias {{Star | this Pokemon}}).",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Water", "Psychic"],
          name: {
            en: "Shooting Star",
            ja: "シューティングスター",
            fr: "Étoile filante",
            de: "Sternschnuppe",
            es: "Estrella fugaz",
            it: "Stella cadente",
            pt: "Estrela de tiro",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, discard all Energy cards attached to Latias {{Star|this Pokemon}} and this attack does 50 damage plus 100 more damage.",
            ja: "防御ポケモンがポケモン-Exの場合、ラティアスに取り付けられたすべてのエネルギーカードを破棄します{{star | this pokemon}}。この攻撃は50のダメージと100ダメージを与えます。",
            fr: "Si le Pokémon en défense est Pokemon-EX, jetez toutes les cartes d'énergie attachées aux Latias {{Star | ce Pokémon}} et cette attaque fait 50 dégâts plus 100 autres dégâts.",
            de: "Wenn das verteidigende Pokemon Pokemon-EX ist, verwerfen Sie alle an Latias {{Stern | dieses Pokemon}} verbundenen Energiekarten, und dieser Angriff verursacht 50 Schäden plus 100 weitere Schäden.",
            es: "Si el Pokémon defensor es Pokemon-EX, deseche todas las cartas de energía unidas a Latias {{Star | This Pokemon}} y este ataque hace 50 daño más 100 más de daño.",
            it: "Se il Pokemon in difesa è Pokemon-Ex, scartare tutte le carte di energia collegate a Latias {{Star | questo Pokemon}} e questo attacco infligge 50 danni più 100 danni in più.",
            pt: "Se o Pokemon atual for Pokemon-Ex, descarte todos os cartões de energia anexados a latias {{Star | this Pokemon}} e esse ataque causa 50 danos mais 100 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
