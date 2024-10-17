import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "ビブラーバ"
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	dexId: [329],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "翅を 激しく 振動させて 超音波を 発生。 気絶した 獲物を 消化液で 溶かす。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "いやなおと"
		},

		effect: {
			ja: "次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+50」される。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "カッターウインド"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card