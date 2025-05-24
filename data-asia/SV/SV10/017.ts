import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>黑魯加",
		'zh-cn': "<火箭隊的>黑魯加",
		ja: "ロケット団のヘルガー"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "要是被牠口中噴出的火焰灼傷， 傷口的部分不管過了多久 都依舊會感到疼痛。",
		'zh-cn': "要是被牠口中噴出的火焰灼傷， 傷口的部分不管過了多久 都依舊會感到疼痛。",
		ja: "口から 吹き出す 炎で 火傷すると いつまでたっても 傷口が うずいてしまう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "惡之火種",
			'zh-cn': "惡之火種",
			ja: "あくのひだね"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】與【混亂】。",
			'zh-cn': "將對手的戰鬥寶可夢【灼傷】與【混亂】。",
			ja: "相手のバトルポケモンをやけどとこんらんにする。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "燃燒殆盡",
			'zh-cn': "燃燒殆盡",
			ja: "バーンアウト"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		},

		damage: 120,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [229]
}

export default card