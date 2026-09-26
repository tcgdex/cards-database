import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "This selfish, attention-seeking Pokémon stores poison and electricity in two different sacs inside its body."
	},

	name: {
		en: "Toxel",
		fr: "Toxizap",
		de: "Toxel",
		es: "Toxel",
		it: "Toxel",
		'es-mx': "Toxel",
		pt: "Toxel"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [848],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			es: "Apisonar",
			it: "Carica",
			'es-mx': "Colisión",
			pt: "Aríete"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907665,
				tcgplayer: 716457
			}
		}
	],
}

export default card
