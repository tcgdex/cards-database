import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 30,

	types: [
		"Psychic",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shell Survival",
				fr: "Coquille de Survie"
			},
			effect: {
				en: "Put this Pokémon into play only with the effect of Ninjask’s Cast-Off Shell Ability. (When you are setting up to play, you cannot put it face down as your Active Pokémon or on your Bench.)",
				fr: "Ce Pokémon ne peut être mis en jeu que par l’effet du talent Coquille Libérante de Ninjask. (Lorsque vous vous apprêtez à jouer, vous ne pouvez pas le placer face cachée en tant que Pokémon Actif ou Pokémon de Banc.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Life Squeeze",
				fr: "Presse-Vie"
			},
			effect: {
				en: "Put damage counters on your opponent’s Active Pokémon until its remaining HP is 10.",
				fr: "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu’à ce qu’il ne lui reste que 10 PV."
			},

		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
