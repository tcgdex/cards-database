import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [955],
	set: Set,

	name: {
		en: "Flittle",
		fr: "Flotillon",
		es: "Flittle",
		it: "Flittle",
		pt: "Flittle",
		de: "Flattutu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785922,
				tcgplayer: 567294
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785922,
				tcgplayer: 567294
			}
		},
	],

	illustrator: "Yuu Nishida",

}

export default card
