import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'de-de': "Octillery"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [224],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Remoraid",
		'fr-fr': "Remoraid"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Water Vein",
				'fr-fr': "Filon d'eau",
				'de-de': "Water Vein"
			},
			effect: {
				'en-us': "Reveal the top 5 cards of your deck. Flip a coin for each Energy card you find there. This attack does 50 damage times the number of heads. Shuffle the revealed cards back into your deck.",
				'fr-fr': "Retournez les 5 cartes du dessus de votre deck. Lancez une pièce pour chaque carte Énergie que vous y trouvez. Cette attaque inflige 50 dégâts multipliés par le nombre de faces. Mélangez les cartes retournées à votre deck.",
				'de-de': "Reveal the top 5 cards of your deck. Flip a coin for each Energy card you find there. This attack does 50 damage times the number of heads. Shuffle the revealed cards back into your deck."
			},
			damage: "50×",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Octazooka",
				'fr-fr': "Octazooka",
				'de-de': "Octazooka"
			},
			effect: {
				'en-us': "Any time the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack does nothing. (If the Defending Pokémon is no longer your opponent's Active Pokémon, this effect ends.)",
				'fr-fr': "Chaque fois que le Pokémon Défenseur essaye d'attaquer, votre adversaire lance une pièce. Si c'est pile, cette attaque est sans effet. (Si le Pokémon Défenseur n'est plus le Pokémon Actif de votre adversaire, cet effet se termine.)",
				'de-de': "Any time the Defending Pokémon tries to attack, your opponent flips a coin. If tails, the attack does nothing. (If the Defending Pokémon is no longer your opponent 's Pokémon, this effect ends.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It loves to lurk inside holes in rocks. It sometimes sprays ink on prey by sticking out only its mouth."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87833,
				cardmarket: 278479
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278479,
				tcgplayer: 87833
			}
		}
	],

}

export default card
