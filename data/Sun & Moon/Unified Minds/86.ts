import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		487,
	],
	hp: 130,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dimension Breach",
				fr: "Transgression Dimensionnelle",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Special Energy from your opponent's Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
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
	retreat: 1,



}

export default card
