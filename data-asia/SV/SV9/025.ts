import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホエルオー",
		'zh-tw': "吼鯨王",
		'zh-cn': "吼鯨王"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [321],
	hp: 240,
	types: ["Water"],

	description: {
		ja: "とにかく どでかいので 人気。 ホエルオーウォッチングは 各地で 人気の 観光プラン なのだ。",
		'zh-tw': "因為無比巨大而受歡迎。 觀看吼鯨王的生態在各地都是 非常受歡迎的遊覽項目。",
		'zh-cn': "因為無比巨大而受歡迎。 觀看吼鯨王的生態在各地都是 非常受歡迎的遊覽項目。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハイドロポンプ",
			'zh-tw': "水炮",
			'zh-cn': "水炮"
		},

		damage: "10+",

		effect: {
			ja: "このポケモンについているエネルギーの数×50ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×50點傷害。",
			'zh-cn': "增加這隻寶可夢身上附加的【水】能量的數量×50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I"
}

export default card