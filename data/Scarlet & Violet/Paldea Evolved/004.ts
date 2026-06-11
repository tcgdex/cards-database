import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [204],
	set: Set,

	name: {
		fr: "Pomdepik",
		en: "Pineco",
		es: "Pineco",
		it: "Pineco",
		pt: "Pineco",
		de: "Tannza"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			fr: "Roulade",
			en: "Rollout",
			es: "Rodar",
			it: "Rotolamento",
			pt: "Rolagem",
			de: "Walzer"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715476,
				tcgplayer: 497415,
				cardtrader: 248300
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715476,
				tcgplayer: 497415,
				cardtrader: 248300
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
