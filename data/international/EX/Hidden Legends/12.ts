import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Milotic",
		'fr-fr': "Milobellus",
		'de-de': "Milotic"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [350],

	hp: 100,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Feebas",
		'fr-fr': "Barpau"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Healing Shower",
				'fr-fr': "Douche guérisseuse",
				'de-de': "Healing Shower"
			},
			effect: {
				'en-us': "Once during your turn, when you play Milotic from your hand to evolve 1 of your Pokémon, you may remove all damage counters from all of your Pokémon and your opponent's Pokémon (excluding Pokémon-ex).",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous jouez Milobellus de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez retirer à vos Pokémon et à ceux de votre adversaire tous leurs marqueurs de dégât (Pokémon-ex exclus).",
				'de-de': "Once during your turn, when your play Milotic from your hand to evolve 1 of your Pokémon, you may remove all damage counters from all of your Pokémon and your opponent's Pokémon (excluding Pokémon-ex)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse vague",
				'de-de': "Wave Splash"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Distorted Wave",
				'fr-fr': "Vague tordue",
				'de-de': "Distorted Wave"
			},
			effect: {
				'en-us': "Before doing damage, remove 3 damage counters from the Defending Pokémon (all if there are less than 3).",
				'fr-fr': "Avant d'infliger des dégâts, retirez au Pokémon Défenseur 3 marqueurs de dégât (retirez-les lui tous s'il en possède moins de 3).",
				'de-de': "Before doing damage, remove 3 damage counters from the Defending Pokémon (all if there are less than 3)."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87452,
				cardmarket: 276086
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 87452,
				cardmarket: 276086
			}
		},
		{
			type: "normal",
			stamp: ['jeremy-maron'],
			thirdParty: {
				tcgplayer: 477555,
				cardmarket: 276086
			}
		},
	]
}

export default card
