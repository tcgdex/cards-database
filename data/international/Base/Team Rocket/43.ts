import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Primeape",
		'fr-fr': "Colossinge obscur",
		'de-de': "Dunkles Rasaff"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Frenzy",
				'fr-fr': "Pète les plombs",
				'de-de': "Frenzy"
			},
			effect: {
				'en-us': "If Dark Primeape does any damage while it's Confused (even to itself), it does 30 more damage.",
				'fr-fr': "Si Colossinge obscur inflige des dégâts lorsqu'il est Confus (y compris à lui-même), il inflige 30 dégâts supplémentaires.",
				'de-de': "If Dark Primeape does any damage while it's Confused (even to itself), it dies 20 more damage."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Frenzied Attack",
				'fr-fr': "Attaque frénétique",
				'de-de': "Frenzied Attack"
			},
			effect: {
				'en-us': "Dark Primeape is now Confused (after doing damage).",
				'fr-fr': "Colossinge obscur est maintenant Confus (après application des dégâts).",
				'de-de': "Dark Primeape is now Confused (after doing damage)."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Although Primeapes have always been mean, lately they seem to be becoming even more vicious and frenzied.",
		'fr-fr': "Bien que les Colossinge aient toujours été mauvais, il semble que depuis peu, ils deviennent de plus en plus vicieux et frénétiques."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274096,
				tcgplayer: 84641
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274096,
				tcgplayer: 84641
			}
		}
	]
}

export default card
