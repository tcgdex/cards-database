import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Venusaur",
         ja: "金星",
         fr: "Vénusaure",
         de: "Venusaurier",
         es: "Venusaur",
         it: "Venusaur",
         pt: "Venusaur",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [3],
      hp: 110,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Chlorophyll",
            ja: "クロロフィル",
            fr: "Chlorophylle",
            de: "Chlorophyll",
            es: "Clorofila",
            it: "Clorofilla",
            pt: "Clorofila",
          },
          effect: {
            en: "All Energy cards that provide only Colorless Energy attached to your Grass PokÃ©mon provide Grass Energy instead.",
            ja: "草に取り付けられた無色のエネルギーのみを提供するすべてのエネルギーカードは、代わりに草のエネルギーを提供します。",
            fr: "Toutes les cartes d'énergie qui ne fournissent que de l'énergie incolore attachée à votre gazon Pokã © Mon fournissent une énergie de l'herbe à la place.",
            de: "Alle Energiekarten, die nur farblose Energie an Ihrem Gras poké © Mon Mon Mon anbieten, liefern stattdessen Grasergie.",
            es: "Todas las tarjetas de energía que proporcionan solo energía incolora unida a su hierba Poké Mon proporcionan energía de hierba.",
            it: "Tutte le carte energetiche che forniscono solo energia incolore attaccate alla tua erba Poké forniscono invece energia in erba.",
            pt: "Todos os cartões de energia que fornecem apenas energia incolor ligada à sua grama em vez de fornecer energia da grama.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Green Blast",
            ja: "グリーンブラスト",
            fr: "Explosion verte",
            de: "Grüne Explosion",
            es: "Explosión verde",
            it: "Esplosione verde",
            pt: "Explosão verde",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokemon.",
            ja: "すべてのポケモンに取り付けられた各草のエネルギーに対して20のダメージと10ダメージがさらに10ダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque énergie de l'herbe attachée à tous vos Pokémon.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jede Grasenergie, die an Ihrem gesamten Pokémon angebracht ist.",
            es: "Hace 20 daños más 10 daños más por cada energía de hierba unida a todos sus Pokémon.",
            it: "Fa 20 danni più 10 danni in più per ogni energia di erba attaccata a tutto il tuo Pokemon.",
            pt: "Causam 20 danos mais 10 mais danos para cada energia da grama anexada a todos os seus Pokémon.",
          },
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Toxic Sleep",
            ja: "有毒な睡眠",
            fr: "Sommeil toxique",
            de: "Giftiger Schlaf",
            es: "Sueño tóxico",
            it: "Sonno tossico",
            pt: "Sono tóxico",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep and Poisoned. Put 2 damage counters instead of 1 on the Defending Pokemon between turns.",
            ja: "防御するポケモンは今眠っていて毒されています。ターンの間に防御ポケモンに1つではなく2つのダメージカウンターを置きます。",
            fr: "Le Pokémon en défense est maintenant endormi et empoisonné. Mettez 2 compteurs de dégâts au lieu de 1 sur le Pokémon en défense entre les virages.",
            de: "Das verteidigende Pokémon schläft jetzt und vergiftet. Setzen Sie 2 Schadenszähler anstelle von 1 auf das verteidigende Pokémon zwischen den Kurven.",
            es: "El Pokémon defensor ahora está dormido y envenenado. Coloque 2 contadores de daño en lugar de 1 en el Pokémon defensor entre giros.",
            it: "Il Pokemon in carica è ora addormentato e avvelenato. Metti 2 contatori di danno invece di 1 sul Pokemon in difesa tra le curve.",
            pt: "O Pokémon atual está agora dormindo e envenenado. Coloque 2 contadores de danos em vez de 1 no Pokémon atual entre as voltas.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
