import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoqueen",
         ja: "nidoqueen",
         fr: "Nidaqueen",
         de: "Nidoqueen",
         es: "Nidoqueen",
         it: "Nidoqueen",
         pt: "NidoQueen",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [31],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Family Bonds",
            ja: "家族の債券",
            fr: "Obligations familiales",
            de: "Familienbindungen",
            es: "Vínculos familiares",
            it: "Legami familiari",
            pt: "Vínculos familiares",
          },
          effect: {
            en: "As long as Nidoqueen is in play, the Retreat Cost for Nidoran F, Nidorina, Nidoran M, Nidorino and Nidoking is 0.",
            ja: "Nidoqueenがプレイしている限り、Nidoran F、Nidorina、Nidoran M、Nidorino、Nidokingのリトリートコストは0です。",
            fr: "Tant que Nidocheen est en jeu, le coût de retraite pour Nidoran F, Nidorina, Nidoran M, Nidorino et Nidoking est 0.",
            de: "Solange Nidoqueen im Spiel ist, sind die Rückzugskosten für Nidoran F, Nidorina, Nidoran M, Nidorino und Nidoking 0.",
            es: "Mientras Nidoqueen esté en juego, el costo de retiro para Nidoran F, Nidorina, Nidoran M, Nidorino y Nidoking es 0.",
            it: "Finché Nidoqueen è in gioco, il costo di ritiro per Nidoran F, Nidorina, Nidoran M, Nidorino e Nidoking è 0.",
            pt: "Enquanto Nidoqueen estiver em jogo, o custo do retiro para Nidoran F, Nidorina, Nidoran M, Nidorino e Nidoking é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Toxic",
            ja: "有毒",
            fr: "Toxique",
            de: "Giftig",
            es: "Tóxico",
            it: "Tossico",
            pt: "Tóxico",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokemon between turns.",
            ja: "防御ポケモンは現在中毒になっています。ターンの間に防御ポケモンに1つではなく2つのダメージカウンターを置きます。",
            fr: "Le Pokémon en défense est maintenant empoisonné. Mettez 2 compteurs de dégâts au lieu de 1 sur le Pokémon en défense entre les virages.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet. Setzen Sie 2 Schadenszähler anstelle von 1 auf das verteidigende Pokémon zwischen den Kurven.",
            es: "El Pokémon defensor ahora está envenenado. Coloque 2 contadores de daño en lugar de 1 en el Pokémon defensor entre giros.",
            it: "Il Pokemon in carica è ora avvelenato. Metti 2 contatori di danno invece di 1 sul Pokemon in difesa tra le curve.",
            pt: "O Pokémon atual agora está envenenado. Coloque 2 contadores de danos em vez de 1 no Pokémon atual entre as voltas.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Power Lariat",
            ja: "パワーラリアット",
            fr: "Power Lariat",
            de: "Power Lariat",
            es: "Potencia lariat",
            it: "Power Lariat",
            pt: "Poder lariat",
          },
          effect: {
            en: "Does 40 damage plus 10 more damage for each Evolved Pokemon you have in play.",
            ja: "40のダメージに加えて、プレイ中の進化したポケモンごとにさらに10ダメージを与えます。",
            fr: "Fait 40 dégâts plus 10 dégâts supplémentaires pour chaque pokemon évolué que vous avez en jeu.",
            de: "Fügt 40 Schäden plus 10 weitere Schäden für jedes entwickelte Pokémon, das Sie im Spiel haben.",
            es: "Hace 40 daños más 10 daños más por cada Pokémon evolucionado que tienes en juego.",
            it: "Fa 40 danni più 10 danni in più per ogni Pokemon evoluto che hai in gioco.",
            pt: "40 danos mais 10 mais 10 danos para cada Pokémon evoluído que você tem em jogo.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
