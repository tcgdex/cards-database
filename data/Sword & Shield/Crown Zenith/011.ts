import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [420],
	set: Set,

	name: {
		en: "Cherubi",
		fr: "Ceribou",
		es: "Cherubi",
		it: "Cherubi",
		pt: "Cherubi",
		de: "Kikugi"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Leafage",
			fr: "Feuillage",
			es: "Follaje",
			it: "Fogliame",
			pt: "Folhagem",
			de: "Blattwerk"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		en: "The deeper a Cherubi's red, the more nutrients it has stockpiled in its body. And the sweeter and tastier its small ball!",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691728,
				tcgplayer: 478060
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691728,
				tcgplayer: 478060
			}
		},
	],
}

export default card
