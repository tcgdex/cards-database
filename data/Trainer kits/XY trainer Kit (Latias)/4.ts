import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		en: "Latias",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",

	description: {
		en: "These friendly Pokémon send signals to one another with beautiful chirps and tail-feather movements."
	},

	stage: "Basic",

	weaknesses: [
		{
			type: "Psychic",
		},
	],
	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic"
		},

		damage: 10
	}, {
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque"
		},

		damage: "10+",

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	hp: 70,
	types: [
		"Colorless"
	],
	retreat: 1,

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86650
			}
		},
	],

}

export default card