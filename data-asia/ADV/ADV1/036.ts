import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Chansey ex",
         ja: "Chansey Ex",
         fr: "Chansey ex",
         de: "Chansey Ex",
         es: "Chansey ex",
         it: "Chansey Ex",
         pt: "Chansey Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [113],
      hp: 120,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Healing Egg",
            ja: "卵の癒し",
            fr: "Œuf de guérison",
            de: "Ei heilen",
            es: "Huevo curativo",
            it: "Uovo di guarigione",
            pt: "Ovo de cura",
          },
          effect: {
            en: "Remove 2 damage counters (1 if there is only 1) from each of your Pokemon. Remove no damage counters from Chansey ex.",
            ja: "各ポケモンから2つのダメージカウンター（1つの場合は1つの場合は1）を削除します。 Chansey Exからダメージカウンターを削除しません。",
            fr: "Retirez 2 compteurs de dégâts (1 s'il n'y en a que 1) de chacun de vos Pokémon. Retirez aucun compteur de dégâts de Chansey Ex.",
            de: "Entfernen Sie 2 Schadenszähler (1, wenn es nur 1) von jedem Ihrer Pokémon gibt. Entfernen Sie keine Schadenszähler von Chansey Ex.",
            es: "Retire 2 contadores de daño (1 si solo hay 1) de cada uno de sus Pokémon. No elimine los contadores de daño de Chansey Ex.",
            it: "Rimuovi 2 contatori di danno (1 se c'è solo 1) da ciascuno dei tuoi Pokemon. Rimuovere i contatori di danni da Chansey Ex.",
            pt: "Remova 2 contadores de danos (1 se houver apenas 1) de cada um dos seus Pokémon. Remova nenhum contador de danos de Chansey Ex.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
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
            en: "Chansey ex does 60 damage to itself.",
            ja: "Chansey Exはそれ自体に60のダメージを与えます。",
            fr: "Chansey Ex fait 60 dégâts à lui-même.",
            de: "Chansey EX schädigt sich 60.",
            es: "Chansey Ex hace 60 daños a sí mismo.",
            it: "Chansey Ex fa 60 danni a se stesso.",
            pt: "Chansey ex causa 60 danos a si mesmo.",
          },
          damage: 80,
        },
      ],

      retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		},
	],
};
