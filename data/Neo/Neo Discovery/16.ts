import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoke"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
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

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Counter",
				fr: "Riposte"
			},
			effect: {
				en: "If an attack damages Wobbuffet during your opponent's next turn (even if Wobbuffet is knocked out), flip a coin. If heads, Wobbuffet attacks the Defending Pokémon for an equal amount of damage.",
				fr: "Si une attaque inflige des dégâts à Qulbutoke pendant le prochain tour de votre adversaire (même si Qulbutoke est K.O.), lancez 1 pièce. Si c'est face, Qulbutoke attaque le Pokémon Défenseur et lui inflige le même nombre de dégâts."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Pour cacher sa queue noire, il vit discrètement dans l'obscurité. Il n'attaque jamais le premier."
	}
}

export default card
