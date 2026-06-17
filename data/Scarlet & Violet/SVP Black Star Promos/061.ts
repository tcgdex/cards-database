import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [204],
	set: Set,

	name: {
		en: "Pineco",
		fr: "Pomdepik",
		es: "Pineco",
		it: "Pineco",
		pt: "Pineco",
		de: "Tannza"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			it: "Rotolamento",
			pt: "Rolagem",
			de: "Walzer"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	illustrator: "Nobuhiro Imagawa",
	description: {
		en: "It likes to make its shell thicker by adding layers of tree bark. The additional weight doesn't bother it.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 729205,
				tcgplayer: 526634
			},
		}
	],
}

export default card
