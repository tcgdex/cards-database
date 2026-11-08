import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [26],

	hp: 80,

	types: [
		"Lightning"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Spark",
				'fr-fr': "Étincelle",
				'de-de': "Spark"
			},
			effect: {
				'en-us': "Does 10 damage to 2 of your opponent's Benched Pokémon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire (ou 1 s'il n'y en a qu'1). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 10 damage to 2 of your opponent's Benched Pokémon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Kerzap",
				'fr-fr': "Décharge électrique",
				'de-de': "Kerzap"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 40 more damage to the Defending Pokémon and discard all Lightning Energy cards attached to Raichu.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires au Pokémon Défenseur et défausse toutes les cartes Énergie  attachées à Raichu.",
				'de-de': "Flip a coin. If heads, this attack does 40 damage plus 40 more damage to the Defending Pokémon and discard all  Energy cards attached to Raichu."
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


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275790,
				tcgplayer: 88506
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275790,
				tcgplayer: 88506
			}
		},
	],

}

export default card
