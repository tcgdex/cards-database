import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Inteleon",
		'fr-fr': "Lézargus",
		'es-es': "Inteleon",
		'it-it': "Inteleon",
		'pt-br': "Inteleon",
		'de-de': "Intelleon"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage2",
	illustrator: "Saki Hayashiro",
	dexId: [818],

	evolveFrom: {
		'en-us': "Drizzile",
		'fr-fr': "Arrozard",
		'es-es': "Drizzile",
		'it-it': "Drizzile",
		'pt-br': "Drizzile",
		'de-de': "Phlegleon"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Quick Shooting",
			'fr-fr': "Tir Rapide"
		},

		effect: {
			'en-us': "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Waterfall",
			'fr-fr': "Cascade"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "Its nictitating membranes let it pick out foes' weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3.",
	},

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574285,
				tcgplayer: 246802
			}
		},
	],
}

export default card
