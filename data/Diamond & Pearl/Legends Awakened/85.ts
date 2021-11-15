import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Bellsprout",
		fr: "Chetiflor",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		69,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Vine Bind",
				fr: "Liane enroulante",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't use any Poké-Powers during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas utiliser de Poké-Powers lors du prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Careless Tackle",
				fr: "Plaquage imprudent",
			},
			effect: {
				en: "Bellsprout does 10 damage to itself.",
				fr: "Chetiflor s'inflige 10 dégâts.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il préfère les climats chauds et humides. Ses lianes peuvent capturer une proie en un clin d'œil."
	}
}

export default card
