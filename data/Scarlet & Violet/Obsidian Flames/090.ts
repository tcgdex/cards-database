import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [325],
	set: Set,

	name: {
		fr: "Spoink",
		en: "Spoink",
		es: "Spoink",
		it: "Spoink",
		pt: "Spoink",
		de: "Spoink"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Trempette",
			en: "Splash",
			es: "Salpicadura",
			it: "Splash",
			pt: "Borrifada",
			de: "Platscher"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Collision",
			en: "Ram",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "Spoink will die if it stops bouncing. The pearl on its head amplifies its psychic powers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725170,
				tcgplayer: 509863,
				cardtrader: 255775
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725170,
				tcgplayer: 509863,
				cardtrader: 255775
			}
		},
	],

	illustrator: "GOSSAN",

	
}

export default card
