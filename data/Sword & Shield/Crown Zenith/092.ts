import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [624],
	set: Set,

	name: {
		en: "Pawniard",
		fr: "Scalpion",
		es: "Pawniard",
		it: "Pawniard",
		pt: "Pawniard",
		de: "Gladiantri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			de: "Durchbohren"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "It uses river stones to maintain the cutting edges of the blades covering its body. These sharpened blades allow it to bring down opponents.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691810,
				tcgplayer: 478230
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691810,
				tcgplayer: 478230
			}
		},
	],
}

export default card
