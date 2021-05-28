import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Shiinotic",
		fr: "Lampignon"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Morelull",
		fr: "Spododo"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flickering Light",
				fr: "Lueur Vacillante"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent’s next turn, the Defending Pokémon can’t attack.",
				fr: "Lancez une pièce. Si c’est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Fear the Forest",
				fr: "Peur Sylvestre"
			},
			effect: {
				en: "If Glimwood Tangle is in play, this attack does 60 more damage.",
				fr: "Si Forêt de Lumirinth est en jeu, cette attaque inflige 60 dégâts supplémentaires."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
