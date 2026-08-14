import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Ledian",
		fr: "Coxyclaque",
		de: "Ledian"
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
		en: "Ledyba",
		fr: "Coxy",
		de: "Ledyba"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Baton Pass",
				fr: "Relais",
				de: "Stafette"
			},
			effect: {
				en: "If you have any Pokémon on your Bench, remove all Energy cards from Ledian and attach them to 1 of those Pokémon, then switch Ledian with that Pokémon.",
				fr: "Si vous avez un ou plusieurs Pokémon  sur votre Banc, retirez toutes les cartes Énergie  sur Coxyclaque et attachez-les à l'un de ces Pokémon, échangez ensuite Coxyclaque avec ce Pokémon.",
				de: "Falls du mindestens ein {G}-Pokémon auf deiner Bank hast, entferne alle {G}-Energiekarten von Ledian und lege sie an eines dieser Pokémon an, und tausche dann Ledian mit diesem Pokémon aus."
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
		en: "When the stars flicker in the night sky, Ledian flutters about, scattering a glowing powder.",
		fr: "Lorsque les étoiles scintillent dans le ciel nocturne, Ledian voltige en répandant une poudre brillante.",
		de: "Wenn die Sterne am nächtlichen Himmel flimmern, flattert Ledian herum und verbreitet ein Leuchtpuder."
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
