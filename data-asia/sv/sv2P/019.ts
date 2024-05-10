import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "コオリッポ",
		'zh-tw': "冰砌鵝"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [875],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "気温の 高い日は 仲間同士で 頭の 氷を くっつけて おたがいを 冷やしながら 過ごす。",
		'zh-tw': "在氣溫高的日子裡，會把頭的冰塊和夥伴們的緊貼 在一起，冰鎮彼此來度日。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘"
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "アイスブロック",
			'zh-tw': "冰之障礙"
		},

		damage: 100,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。次の相手の番、このポケモンが受けるワザのダメージは「-100」される。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。在下個對手的回合，這隻寶可夢受到招式的傷害「-100」點。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card