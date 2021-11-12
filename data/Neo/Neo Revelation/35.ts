import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Paras",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sleep Pinchers",
				fr: "Pince dodo"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il se cache surtout dans les lieux froids et humides. Ce n'est pas l'insecte qui décide, mais les gros champignons qui lui poussent sur le dos et qui le contrôlent."
	},

	abilities: [{
		name: {
			fr: "Pollen allergique"
		},

		effect: {
			fr: "Tant que Parasect reste en jeu, les cartes des piles de défausse de tous les joueurs ne sont pas affectées par les attaques ou les Pouvoirs Pokémon. Ce pouvoir ne fonctionne pas si Parasect est Endormi, Confus ou Paralysé."
		},

		type: "Pokemon Power"
	}]
}

export default card
