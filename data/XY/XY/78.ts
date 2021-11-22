import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Yveltal",
		fr: "Yveltal",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		717,
	],
	hp: 130,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Oblivion Wing",
				fr: "Mort-Ailes",
			},
			effect: {
				en: "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie Darkness de votre pile de défausse à l'un de vos Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Darkness Blade",
				fr: "Lame Obscure",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
