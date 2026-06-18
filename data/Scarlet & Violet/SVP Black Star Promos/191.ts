import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito",
		fr: "Poussacha"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [906],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	illustrator: "Yamazaki Rei",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				en: "Scratch",
				fr: "Griffe"
			},

			damage: "10"
		},
		{
			cost: ["Grass", "Colorless"],

			name: {
				en: "Leafage",
				fr: "Feuillage"
			},
			damage: "20",
		}
	],

	retreat: 1,
	regulationMark: "G",

	variants:[
		{
			type: "holo",
			stamp: ["horizons"],
			thirdParty: {
				cardmarket: 784941,
				tcgplayer: 595036
			},
		}
	]
}

export default card
