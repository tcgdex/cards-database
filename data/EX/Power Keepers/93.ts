import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Claydol ex",
		fr: "Kaorine ex",
		de: "Lepumentas ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Type Shift",
				fr: "Transfert de type",
				de: "Typenwechsel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Claydol ex's type is Fighting until the end of your turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Le type de Kaorine ex est  jusqu'à la fin de votre tour.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power einsetzen. Lepumentas ex erhält den Typ  bis zum Ende des Zuges."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Boom",
				fr: "Psycho-boom",
				de: "Psychoknall"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede an das Verteidigende Pokémon angelegte Energie zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Shadow Crush",
				fr: "Écras'ombre",
				de: "Schattenzermalmer"
			},
			effect: {
				en: "You may discard a Psychic Energy card attached to Claydol ex. If you do, discard an Energy card attached to the Defending Pokémon.",
				fr: "Vous pouvez défausser une carte Énergie  attachée à Kaorine ex. Défaussez alors une carte Énergie attachée au Pokémon Défenseur.",
				de: "Du kannst 1 -Energiekarte, die an Lepumentas ex angelegt ist, auf deinen Ablagestapel legen. Wenn du das machst, lege 1 Energiekarte, die an das Verteidigende Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277399,
		tcgplayer: 84340
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

