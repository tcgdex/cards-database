import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa",
		'de-de': "Teddiursa"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		216,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rest",
				'fr-fr': "Repos",
				'de-de': "Ruhe"
			},
			effect: {
				'en-us': "Remove all Special Conditions and 2 damage counters from Teddiursa. Teddiursa is now Asleep.",
				'fr-fr': "Retirez à Teddiursa tous ses États Spéciaux ainsi que 2 marqueurs de dégât. Teddiursa est maintenant Endormi.",
				'de-de': "Entferne alle Speziellen Zustände und 2 Schadensmarken von Teddiursa. Teddiursa schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sweet Palm",
				'fr-fr': "Douce paume",
				'de-de': "Süße Tatze"
			},
			effect: {
				'en-us': "Before doing damage, remove 1 damage counter from the Defending Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, retirez 1 marqueur de dégât au Pokémon Défenseur.",
				'de-de': "Bevor der Schaden zugefügt wird, entferne 1 Schadensmarke vom Verteidigenden Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It lets honey soak into its paws so it can lick them all the time. Every sets of paws tastes unique.",
		'fr-fr': "Il baigne ses griffes dans le miel pour les lécher. Chaque paire de pattes a un goût unique."
	},

	thirdParty: {
		cardmarket: 277734,
		tcgplayer: 89858
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
