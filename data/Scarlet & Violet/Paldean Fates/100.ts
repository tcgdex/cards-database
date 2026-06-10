import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [459],
	set: Set,

	name: {
		en: "Snover",
		fr: "Blizzi",
		es: "Snover",
		it: "Snover",
		pt: "Snover",
		de: "Shnebedeck"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
			de: "Korkenzieherhieb"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751639,
				tcgplayer: 534471,
				cardtrader: 274284
			}
		},
	],

	illustrator: "Saya Tsuruta",

	description: {
		en: "During cold seasons, it migrates to the mountain's lower reaches. It returns to the snow-covered summit in the spring.",
	},

}

export default card
