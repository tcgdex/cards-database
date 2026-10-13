import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "オコリザル"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	dexId: [57],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		ja: "マンキー"
	},

	description: {
		ja: "視線が 合っただけで 怒り 逃げ出したら また 怒り たたきのめしても まだ 怒る。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "みだれひっかき"
		},

		effect: {
			ja: "コインを3回投げ、オモテの数×30ダメージ。"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "からてチョップ"
		},

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。"
		},

		damage: "80-",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567872, tcgplayer: 602219, cardtrader: 143004 }, stamp: ["1st-edition"] }
	]
}

export default card
