import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ニョロゾ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "OKACHEKE",
	dexId: [61],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "全身の 皮膚は 湿っているが お腹の 渦巻きの 部分の 感触は すべすべとしている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "さいみんじゅつ"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "おうふくビンタ"
		},

		damage: "30×",

		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card
