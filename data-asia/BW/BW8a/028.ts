import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "マンキー"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 50,
	types: ["Fighting"],

	description: {
		ja: "木の上で 生活している。 群れの １匹が 怒り出すと 全員が 意味もなく 暴れだす。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ひっかく"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567871, tcgplayer: 602213, cardtrader: 143003 }, stamp: ["1st-edition"] }
	]
}

export default card
