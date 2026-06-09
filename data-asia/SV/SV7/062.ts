import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吞食獸",
		'zh-cn': "吞食獸",
		ja: "マルノーム"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "就連輪胎都是整個吞掉。 會從身上的毛孔分泌出 帶有劇毒的體液。",
		'zh-cn': "就連輪胎都是整個吞掉。 會從身上的毛孔分泌出 帶有劇毒的體液。",
		ja: "タイヤも ひと口で 丸呑み。 体の 毛穴から 猛毒の 体液を 分泌する。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "張大嘴",
			'zh-cn': "張大嘴",
			ja: "パックンマウス"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附加的能量的數量，比對手的戰鬥寶可夢身上附加的能量的數量多，則增加160點傷害。",
			'zh-cn': "若這隻寶可夢身上附加的能量的數量，比對手的戰鬥寶可夢身上附加的能量的數量多，則增加160點傷害。",
			ja: "このポケモンについているエネルギーの数が、相手のバトルポケモンについているエネルギーの数より多いなら、160ダメージ追加。"
		},

		damage: "10＋",
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "毒液一擊",
			'zh-cn': "毒液一擊",
			ja: "ベノムヒット"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】。",
			ja: "相手のバトルポケモンをどくにする。"
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [317],

	thirdParty: {
		cardmarket: 779076
	}
}

export default card