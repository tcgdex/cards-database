import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Latios Star",
         ja: "ラティオススター",
         fr: "Star des latios",
         de: "Latios Star",
         es: "Estrella de Latios",
         it: "Latios Star",
         pt: "Estrela Latios",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [381],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Miraculous Light",
            ja: "奇跡的な光",
            fr: "Lumière miraculeuse",
            de: "Wundersames Licht",
            es: "Luz milagrosa",
            it: "Luce miracolosa",
            pt: "Luz milagrosa",
          },
          effect: {
            en: "Remove 1 damage counter and all Special Conditions from Latios {{Star|this Pokemon}}.",
            ja: "Latiosから1つのダメージカウンターとすべての特別な条件を取り外します{{Star | This Pokemon}}。",
            fr: "Retirez 1 compteur de dégâts et toutes les conditions spéciales de Latios {{Star | Ce pokemon}}.",
            de: "Entfernen Sie 1 Schadenschalter und alle besonderen Bedingungen von Latios {{stern | this pokemon}}.",
            es: "Elimine 1 contador de daño y todas las condiciones especiales de Latios {{Star | este Pokemon}}.",
            it: "Rimuovi 1 contatore di danni e tutte le condizioni speciali da latios {{star | this Pokemon}}.",
            pt: "Remova 1 contador de danos e todas as condições especiais dos latios {{star | this Pokemon}}.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Lightning", "Psychic"],
          name: {
            en: "Shining Star",
            ja: "輝く星",
            fr: "Étoile brillante",
            de: "Leuchtender Stern",
            es: "Estrella brillante",
            it: "Stella splendente",
            pt: "Estrela brilhante",
          },
          effect: {
            en: "If the Defending Pokemon is a Stage 2 Evolved Pokemon, discard all Energy cards attached to Latios {{Star|this Pokemon}} and this attack does 50 damage plus 100 more damage.",
            ja: "防御ポケモンがステージ2の進化したポケモンである場合、ラティオスに取り付けられたすべてのエネルギーカードを捨てます{{star | this pokemon}}。",
            fr: "Si le Pokémon en défense est un pokemon évolué de stade 2, jetez toutes les cartes d'énergie attachées aux Latios {{Star | ce pokemon}} et cette attaque fait 50 dégâts plus 100 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon ein Pokemon der Stufe 2 ist, verwerfen Sie alle an Latios {{Stern | dieses Pokemon}}}}}}}}} und dieser Angriff 50 Schäden plus 100 weitere Schäden.",
            es: "Si el Pokémon defensor es un Pokémon evolucionado en la etapa 2, descarte todas las cartas de energía unidas a Latios {{Star | This Pokemon}} y este ataque hace 50 daño más 100 más de daño.",
            it: "Se il Pokemon in difesa è un Pokemon evoluto della Fase 2, scartare tutte le carte di energia collegate a Latios {{Star | questo Pokemon}} e questo attacco infligge 50 danni più 100 danni.",
            pt: "Se o Pokemon defensor for um Pokémon evoluído do estágio 2, descarte todos os cartões de energia anexados a latios {{star | this Pokemon}} e esse ataque causa 50 danos mais 100 mais danos.",
          },
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
