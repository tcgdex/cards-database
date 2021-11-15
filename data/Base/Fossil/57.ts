import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Zubat",
		fr: "Nosferapti"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		41,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leech Life",
				fr: "Vampirisme"
			},
			effect: {
				en: "Remove a number of damage counters from Zubat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Zubat has fewer damage counters than that, remove all of them.",
				fr: "Retirez de Nosferapti un nombre de marqueurs de dégâts égal au nombre de dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance.) Si le nombre de marqueurs sur Nosferapti est inférieur à ce résultat, retirez-les tous."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Se déplace en colonies dans les endroits sombres. Il se déplace grâce aux ultrasons."
	}
}

export default card
