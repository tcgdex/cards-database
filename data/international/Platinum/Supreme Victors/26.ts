import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Dusknoir FB",
		'fr-fr': "Noctunoir ",
		'de-de': "Zwirrfinst FB"
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [477],
	hp: 90,
	types: [
		"Psychic"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Ghost Hand",
				'fr-fr': "Main fantôme",
				'de-de': "Geisterhand"
			},
			effect: {
				'en-us': "Put 1 damage counter on 1 of your Benched Pokémon.",
				'fr-fr': "Placez 1 marqueur de dégât sur 1 de vos Pokémon de Banc.",
				'de-de': "Lege 1 Schadensmarke auf 1 Pokémon auf deiner Bank."
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
				'en-us': "Cursed Wrath",
				'fr-fr': "Colère ensorcelée",
				'de-de': "Zornesfluch"
			},
			effect: {
				'en-us': "Does 10 damage times the number of Pokémon SP in your discard pile.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de Pokémon SP dans votre pile de défausse.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der Pokémon SP in deinem Ablagestapel zu."
			},
			damage: "10x",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 371552,
				tcgplayer: 85042
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278717,
				tcgplayer: 85042
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 371552,
				tcgplayer: 164073
			}
		},
	],

}

export default card
