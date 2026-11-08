import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Ledian",
		'fr-fr': "Coxyclaque",
		'de-de': "Ledian"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		166,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Ledyba",
		'fr-fr': "Coxy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Baton Pass",
				'fr-fr': "Relais",
				'de-de': "Stafette"
			},
			effect: {
				'en-us': "If you have any Pokémon on your Bench, remove all Energy cards from Ledian and attach them to 1 of those Pokémon, then switch Ledian with that Pokémon.",
				'fr-fr': "Si vous avez un ou plusieurs Pokémon  sur votre Banc, retirez toutes les cartes Énergie  sur Coxyclaque et attachez-les à l'un de ces Pokémon, échangez ensuite Coxyclaque avec ce Pokémon.",
				'de-de': "Falls du mindestens ein -Pokémon auf deiner Bank hast, entferne alle -Energiekarten von Ledian und lege sie an dieses Pokémon an, und tausche dann Ledian mit diesem Pokémon aus."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "When the stars flicker in the night sky, Ledian flutters about, scattering a glowing powder.",
		'fr-fr': "Lorsque les étoiles scintillent dans le ciel nocturne, Ledian voltige en répandant une poudre brillante."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274439,
				tcgplayer: 86692
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274439,
				tcgplayer: 86692
			}
		}
	]
}

export default card
