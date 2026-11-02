import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Yveltal",
		fr: "Yveltal",
		de: "Yveltal"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
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
				de: "Unheilsschwingen"
			},
			effect: {
				en: "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie Darkness de votre pile de défausse à l'un de vos Pokémon de Banc.",
				de: "Lege 1 {D}-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
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
				de: "Finsterklinge"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				de: "Wirf 1 Münze. Bei „Zahl“ kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
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

	description: {
		en: "Hidden away in its jet-black wings is a red passion.",
		de: "Unter seinen pechschwarzen Flügeln verbirgt sich feuerroter Zorn."
	},

	thirdParty: {
		cardmarket: 288525
	}
}

export default card
