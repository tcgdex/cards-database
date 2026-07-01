import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [613],
	set: Set,

	name: {
		en: "Cubchoo",
		fr: "Polarhume",
		es: "Cubchoo",
		it: "Cubchoo",
		pt: "Cubchoo",
		de: "Petznief"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Chilly",
			fr: "Glacial",
			es: "Fresquito",
			it: "Addiaccio",
			pt: "Frio",
			de: "Frösteln"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "When this Pokémon is in good health, its snot becomes thicker and stickier. It will smear its snot on anyone it doesn't like.",
	},

	thirdParty: {
		cardmarket: 608492,
		tcgplayer: 263742
	}
}

export default card