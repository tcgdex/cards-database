import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
	},
	illustrator: "match",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 120,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [{
		cost: [
			"Psychic",
			"Colorless",
		],
		name: {
			en: "Psy Bolt",
			fr: "Choc Mental"
		},
		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		},
		damage: 20,

	}, {
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Lame Zen"
		},

		effect: {
			fr: "Ce Pokémon ne peut pas utiliser Lame Zen pendant votre prochain tour."
		},

		damage: 100
	}],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
