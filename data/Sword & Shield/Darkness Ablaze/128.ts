import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Stunfisk V",
		fr: "Limonde de Galar V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 200,

	types: [
		"Metal",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Metal Skin",
				fr: "Peau Métal"
			},
			effect: {
				en: "This Pokémon gets +20 HP for each Metal Energy attached to it.",
				fr: "Chaque Énergie Metal attachée à ce Pokémon lui ajoute 20 PV."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trapping Bite",
				fr: "Piège Mordant"
			},
			effect: {
				en: "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 12 damage counters on the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même s’il est mis K.O.), placez 12 marqueurs de dégâts sur le Pokémon Attaquant."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
