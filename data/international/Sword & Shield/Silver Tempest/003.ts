import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [167],
	set: Set,

	name: {
		en: "Spinarak",
		fr: "Mimigal",
		es: "Spinarak",
		it: "Spinarak",
		pt: "Spinarak",
		de: "Webarak"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			es: "Picadura",
			it: "Coleomorso",
			pt: "Picada",
			de: "Käferbiss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "Although the poison from its fangs isn't that strong, it's potent enough to weaken prey that gets caught in its web.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682042,
				tcgplayer: 451622
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682042,
				tcgplayer: 451622
			}
		},
	],
}

export default card
