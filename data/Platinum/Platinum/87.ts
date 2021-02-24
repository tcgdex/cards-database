import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		54,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Headache",
				fr: "Migraine",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur, Supporter ou Stade de sa main lors de son prochain tour.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Latent Power",
				fr: "Puissance dormante",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does no damage to the Defending Pokémon. Instead, Psyduck is now Confused.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque n'inflige pas de dégâts au Pokémon Défenseur. Psykokwak est alors Confus.",
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



}

export default card
