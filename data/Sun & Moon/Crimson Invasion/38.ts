import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gnawing Curse",
				fr: "Malédiction Rongeante",
			},
			effect: {
				en: "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
				fr: "Lorsque votre adversaire attache une carte Énergie de sa main à l’un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fade to Black",
				fr: "Fondu au Noir",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
