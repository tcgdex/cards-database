import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Camerupt",
		'fr-fr': "Camerupt",
		'de-de': "Camerupt"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [323],

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Numel",
		'fr-fr': "Chamallot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Lava Burn",
				'fr-fr': "Brûlure de lave",
				'de-de': "Lava Burn"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez un Pokémon du Banc de votre adversaire: cette attaque inflige 10 dégâts à ce Pokémon (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				'de-de': "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Spin",
				'fr-fr': "Danseflamme",
				'de-de': "Fire Spin"
			},
			effect: {
				'en-us': "Discard 2 basic Energy cards attached to Camerupt or this attack does nothing.",
				'fr-fr': "Défaussez deux cartes Énergie de base attachées à Camerupt ou cette attaque est sans effet.",
				'de-de': "Discard 2 basic Energy cards attached to Camerupt or this attack does nothing."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275652,
				tcgplayer: 84087
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275652,
				tcgplayer: 84087
			}
		},
	],

}

export default card
