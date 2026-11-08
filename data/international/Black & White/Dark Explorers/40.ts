import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Minun",
		'fr-fr': "Négapi",
		'es-es': "Minun",
		'it-it': "Minun",
		'pt-br': "Minun",
		'de-de': "Minun"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		312,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Negative Ion",
				'fr-fr': "Anion"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 30 (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 30 (avant application de la Faiblesse et de la Résistance)."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Electrishower",
				'fr-fr': "Averse Électrique"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It cheers on friends. If its friends are losing, its body lets off more and more sparks.",
	},

	thirdParty: {
		cardmarket: 280368,
		tcgplayer: 87493
	}
}

export default card
