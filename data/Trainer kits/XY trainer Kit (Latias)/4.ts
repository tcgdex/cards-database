import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [661],
	set: Set,

	name: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "These friendly Pokémon send signals to one another with beautiful chirps and tail-feather movements."
	},

	stage: "Basic",

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

	hp: 50,
	types: ["Colorless"],
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 98329
	}
}

export default card