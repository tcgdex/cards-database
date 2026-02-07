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

	illustrator: "svlt",
	rarity: "Common",
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
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835929
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835928
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836283
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836284
			}
		}
	],
	thirdParty: {
		cardmarket: 835928
	}
}

export default card
