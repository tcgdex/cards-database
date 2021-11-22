import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		473,
	],
	hp: 160,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Piloswine",
		fr: "Cochignon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Thick Fat",
				fr: "Isograisse",
			},
			effect: {
				en: "Any damage done to this Pokémon by attacks from your opponent's Fire or Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire ou Water de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Primordial Boom",
				fr: "Boom Originel",
			},
			effect: {
				en: "If you have a Stadium card in play, this attack does 40 more damage. If your opponent has a Stadium card in play, heal 40 damage from this Pokémon.",
				fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires. Si votre adversaire a une carte Stade en jeu, soignez 40 dégâts à ce Pokémon.",
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
