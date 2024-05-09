import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "タイレーツ"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [870],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "先頭に 立って 指示を 出す ヘイチョーは ６匹の 中で いちばん 強くて 賢いのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ずつき"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "いっしょにとつげき"
		},

		damage: "70＋",

		effect: {
			ja: "自分のベンチに「タイレーツ」がいるなら、90ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card