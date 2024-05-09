import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "グラエナ"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "kawayoo",
	dexId: [262],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "遠くにいる 獲物の においを 嗅ぎつけると リーダーの 指示で 群れが いっせいに 動きはじめる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "むれでかる"
		},

		damage: "30＋",

		effect: {
			ja: "自分のベンチに「グラエナ」がいるなら、90ダメージ追加。"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "おいつめる"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card
