import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spacing Out",
				fr: "Trou d'Memoire"
			},
			effect: {
				en: "Flip a coin. If heads, remove a damage counter from Slowpoke. This attack can't be used if Slowpoke has no damage counters on it.",
				fr: "Lancez une pièce. Si c'est face, retirez un marqueur de dégâts de Ramoloss. Cette attaque ne peut pas être utilisée si Ramoloss n'a pas de marqueur de dégâts sur lui."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Scavenge",
				fr: "Farfouille"
			},
			effect: {
				en: "Discard 1 Energy card attached to Slowpoke in order to use this attack. Put a Trainer card from your discard pile into your hand.",
				fr: "Défaussez 1 carte Énergie  attachée à Ramoloss afin de pouvoir utiliser cette attaque. Déplacez une carte Dresseur depuis votre pile de défausse vers votre main."
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
		fr: "Très lent et endormi, il lui faut 5 secondes pour ressentir la douleur d'une attaque."
	}
}

export default card
