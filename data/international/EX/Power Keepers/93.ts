import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Claydol ex",
		'fr-fr': "Kaorine ex",
		'de-de': "Lepumentas ex"
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
		'en-us': "Baltoy",
		'fr-fr': "Balbuto"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Type Shift",
				'fr-fr': "Transfert de type",
				'de-de': "Typenwechsel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may use this power. Claydol ex's type is Fighting until the end of your turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Le type de Kaorine ex est  jusqu'à la fin de votre tour.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power einsetzen. Lepumentas ex erhält den Typ  bis zum Ende des Zuges."
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
				'en-us': "Psychic Boom",
				'fr-fr': "Psycho-boom",
				'de-de': "Psychoknall"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede an das Verteidigende Pokémon angelegte Energie zu."
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
				'en-us': "Shadow Crush",
				'fr-fr': "Écras'ombre",
				'de-de': "Schattenzermalmer"
			},
			effect: {
				'en-us': "You may discard a Psychic Energy card attached to Claydol ex. If you do, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Vous pouvez défausser une carte Énergie  attachée à Kaorine ex. Défaussez alors une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Du kannst 1 -Energiekarte, die an Lepumentas ex angelegt ist, auf deinen Ablagestapel legen. Wenn du das machst, lege 1 Energiekarte, die an das Verteidigende Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
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
			type: "holo"
		}
	]
}

export default card

