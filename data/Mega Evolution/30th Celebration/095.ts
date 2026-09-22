import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "To protect themselves from danger, they hide their true identities by transforming into people and Pokémon."
	},

	name: {
		en: "Zorua",
		fr: "Zorua",
		de: "Zorua",
		es: "Zorua",
		it: "Zorua",
		'es-mx': "Zorua"
	},

	illustrator: "Atsuya Uki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [570],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			de: "Fänge der Dunkelheit",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			'es-mx': "Colmillo de Oscuridad"
		},

		damage: 40,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907702,
				tcgplayer: 716488
			}
		}
	],
}

export default card
