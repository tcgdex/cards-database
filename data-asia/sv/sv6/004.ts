import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "バルビート"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Orca",
	dexId: [313],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "お尻の 光を 点滅させて 仲間と 会話する。 イルミーゼの 出す 甘い 香りが 大好き。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ファストサイン"
		},

		effect: {
			ja: "このワザは、先攻プレイヤーの最初の番でも使える。自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "れんけいアタック"
		},

		damage: "20＋",

		effect: {
			ja: "自分のベンチに「イルミーゼ」がいるなら、60ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card
