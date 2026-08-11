import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [171],

	hp: 110,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Underwater Dive",
				'fr-fr': "Submerger",
				'de-de': "Tauchgang"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may use this power. Lanturn's type is Water until the end of your turn. This power can't be used if Lanturn is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Lanturn devient un Pokémon de type Water jusqu’à la fin de votre tour. Ce pouvoir ne peut pas être utilisé si Lanturn est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power verwenden. Lanturns Type ist  biz zum Ende des Zuges. Diese Poké-Power kann nicht benutzt werden, wenn Lanturn von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Powerful Spark",
				'fr-fr': "Étincelle puissante",
				'de-de': "Mächtiger Funke"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Energy attached to all of your Pokémon.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée à tous vos Pokémon.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede Energie, die an deine Pokémon angelegt ist, zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279174,
				tcgplayer: 86611
			}
		},
	],

}

export default card
