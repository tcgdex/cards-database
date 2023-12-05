import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Dusknoir FB",
		fr: "Noctunoir ",
		de: "Zwirrfinst FB"
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		477,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Ghost Hand",
				fr: "Main fantôme",
				de: "Geisterhand"
			},
			effect: {
				en: "Put 1 damage counter on 1 of your Benched Pokémon.",
				fr: "Placez 1 marqueur de dégât sur 1 de vos Pokémon de Banc.",
				de: "Lege 1 Schadensmarke auf 1 Pokémon auf deiner Bank."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cursed Wrath",
				fr: "Colère ensorcelée",
				de: "Zornesfluch"
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon SP in your discard pile.",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon SP dans votre pile de défausse.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der Pokémon SP in deinem Ablagestapel zu."
			},
			damage: "10x",

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
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
