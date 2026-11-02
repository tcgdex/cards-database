import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		es: "Scyther",
		it: "Scyther",
		pt: "Scyther",
		de: "Sichlor"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d'Air",
				de: "Luftschnitt"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
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

	retreat: 1,

	description: {
		en: "The sharp scythes on its forearms become increasingly sharp by cutting through hard objects.",
		de: "Die scharfen Sensen an den Unterarmen werden durch das Schneiden harter Objekte noch schärfer."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 280332,
				tcgplayer: 89005
			}
		},
		{
			type: 'holo',
			stamp: ['1st-place', 'poke-ball-league'],
			thirdParty: {
				cardmarket: 450328
			}
		},
		{
			type: 'holo',
			stamp: ['2nd-place', 'poke-ball-league'],
			thirdParty: {
				cardmarket: 450333
			}
		},
		{
			type: 'holo',
			stamp: ['3rd-place', 'poke-ball-league'],
			thirdParty: {
				cardmarket: 450338
			}
		},
		{
			type: 'holo',
			stamp: ['4th-place', 'poke-ball-league'],
			thirdParty: {
				cardmarket: 450343
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 280332,
				tcgplayer: 89005
			}
		},
	],
}

export default card
