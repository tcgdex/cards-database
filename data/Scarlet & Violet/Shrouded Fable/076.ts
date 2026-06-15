import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [878],
	set: Set,

	name: {
		en: "Cufant",
		fr: "Charibari",
		es: "Cufant",
		it: "Cufant",
		pt: "Cufant",
		de: "Kupfanti"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Confront",
			fr: "Confrontation",
			es: "Confrontar",
			it: "Confronto",
			pt: "Confrontar",
			de: "Konfrontieren"
		},

		damage: 70
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
	retreat: 3,
	regulationMark: "H",


	illustrator: "Mina Nakai",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780971,
				tcgplayer: 560387
			}
		},
	],
}

export default card
