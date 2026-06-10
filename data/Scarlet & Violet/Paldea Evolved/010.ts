import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [459],
	set: Set,

	name: {
		fr: "Blizzi",
		en: "Snover",
		es: "Snover",
		it: "Snover",
		pt: "Snover",
		de: "Shnebedeck"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Poing Tire-Bouchon",
			en: "Corkscrew Punch",
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
			type: 'normal',
			thirdParty: {
				cardmarket: 715482,
				tcgplayer: 497421,
				cardtrader: 248306
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715482,
				tcgplayer: 497421,
				cardtrader: 248306
			}
		},
	],

	illustrator: "Taira Akitsu",

	description: {
		en: "During cold seasons, it migrates to the mountain's lower reaches. It returns to the snow-covered summit in the spring.",
	},
}

export default card
