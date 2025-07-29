import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Bastiodon",
		fr: "Bastiodon",
		de: "Bollterus"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		411,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Shieldon",
		fr: "Dinoclier",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Metal Trait",
				fr: "Trait métallique",
				de: "Metal Trait"
			},
			effect: {
				en: "As long as Bastiodon has a Pokémon Tool attached to it, remove 1 damage counter from Bastiodon between turns.",
				fr: "Tant que Bastiodon possède un Outil Pokémon, retirez-lui 1 marqueur de dégât entre 2 tours.",
				de: "As long as Bastiodon has a Pokémon Tool attached to it, remove 1 damage counter from Bastiodon between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Iron Defense",
				fr: "Mur de fer",
				de: "Iron Defense"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Bastiodon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Bastiodon lors du prochain tour de votre adversaire.",
				de: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Bastiodon during your opponent's next turn."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Tackle",
				fr: "Charge de fer",
				de: "Iron Tackle"
			},
			effect: {
				en: "Bastiodon does 30 damage to itself.",
				fr: "Bastiodon s'inflige 30 dégâts.",
				de: "Bastiodon does 30 damage to itself."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278441
	}
}

export default card
