import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [554],
	set: Set,

	name: {
		en: "Darumaka",
		fr: "Darumarond",
		de: "Flampion",
		it: "Darumaka",
		pt: "Darumaka",
		es: "Darumaka",
		'es-mx': "Darumaka"
	},

	illustrator: "Tomowaka",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
			de: "Irrlicht",
			it: "Fuocofatuo",
			pt: "Fogo Fátuo",
			es: "Fuego Fatuo",
			'es-mx': "Fuego Fatuo"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836101
	}
}

export default card