import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoke"
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Tenacious Bind",
				fr: "Liaison tenace"
			},
			effect: {
				en: "As long as Wobbuffet is your Active Pokémon, your opponent's Active Pokémon's Retreat Cost is ColorlessColorless more.",
				fr: "Tant que Qulbutoke est votre Pokémon Actif, le Coût de retraite du Pokémon Actif de votre adversaire est augmenté de ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Trip Over",
				fr: "Croche-pied"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
