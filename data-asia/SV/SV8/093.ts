import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "テラパゴス"
	},

	illustrator: "GIDORA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1024],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "テラスタルの 甲羅は 相手の 技を 受けると そのエネルギーを 吸い取って 自分のものにする。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "プリズムチャージ"
		},

		effect: {
			ja: "自分の山札から、それぞれちがうタイプの基本エネルギーを3枚まで選び、自分の「テラスタル」のポケモンに好きなようにつける。そして山札を切る。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハードタックル"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card