import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		370,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rendezvous",
				fr: "Rendezvous",
			},
			effect: {
				en: "Reveal the top card of your deck and put it into your hand. If that card is a Pokémon, draw 2 cards.",
				fr: "Retournez la carte du dessus de votre deck et placez-la dans votre main. Si c'est un Pokémon, piochez 2 cartes.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Synchro Dance",
				fr: "Danse synchronisée",
			},
			effect: {
				en: "If Luvdisc and the Defending Pokémon have the same amount of Energy attached to them, this attack does 10 damage plus 20 more damage.",
				fr: "Si Lovdisc et le Pokémon Défenseur possède le même nombre d'Énergies, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
