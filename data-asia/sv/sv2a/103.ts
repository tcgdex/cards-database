import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナッシー",
		'zh-tw': "椰蛋樹"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "３つの 頭が 一丸となって 撃つ サイコパワーは 強力。 空が 曇ると 動きが 鈍る。",
		'zh-tw': "３顆頭團結一致發出的精神力量威力強大。天氣 變陰時動作就會變得遲緩。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "サイコキネシス",
			'zh-tw': "精神強念"
		},

		damage: "30+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "ぶちかます",
			'zh-tw': "頭突"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card