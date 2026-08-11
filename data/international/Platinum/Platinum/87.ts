import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'de-de': "Enton"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [54],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Headache",
				'fr-fr': "Migraine",
				'de-de': "Headache"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during his or her next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur, Supporter ou Stade de sa main lors de son prochain tour.",
				'de-de': "Flip a coin. If heads, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during his or her next turn."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Latent Power",
				'fr-fr': "Puissance dormante",
				'de-de': "Latent Power"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does no damage to the Defending Pokémon. Instead, Psyduck is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque n'inflige pas de dégâts au Pokémon Défenseur. Psykokwak est alors Confus.",
				'de-de': "Flip a coin. If tails, this attack does no damage to the Defending Pokémon. Instead, Psyduck is now Confused."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Overwhelmed by enigmatic abilities, it suffers a constant headache. It sometimes uses mysterious powers."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88439,
				cardmarket: 278508
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278508,
				tcgplayer: 88439
			}
		}
	],

}

export default card
