import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Watching from the sky, they attack weakened prey on the ground. They have a habit of decorating themselves with bones."
	},

	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
		es: "Mandibuzz",
		'es-mx': "Mandibuzz",
		de: "Grypheldis"
	},

	illustrator: "Nisota Niso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [630],
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Vullaby"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bone Sniper"
		},

		cost: ["Darkness"],

		effect: {
			en: "This attack does 70 damage to 1 of your opponent's Pokémon that has a Special Energy attached to it"
		}
	}, {
		name: {
			en: "Blasting Wind"
		},

		cost: ["Darkness", "Darkness", "Colorless"],

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895835,
				tcgplayer: 704807
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895835,
				tcgplayer: 704807
			}
		},
	],
}

export default card
