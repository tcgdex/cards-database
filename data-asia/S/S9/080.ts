import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "姆克鷹",
		ja: "ムクホーク"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "變成姆克鷹後，就會脫離群體獨自生活。 擁有強韌的翅膀。",
		ja: "ムクホークに なると 群れから 離れて １匹で 生きていく。 強靭な 翼を 持っている。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "捲風",
			ja: "つむじかぜ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與附加的卡，全部放回對手的牌庫並重洗。",
			ja: "相手のバトルポケモンと、ついているすべてのカードを、相手の山札にもどして切る。"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "旋轉鳥擊",
			ja: "スピニングバード"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [398],

	thirdParty: {
		cardmarket: 605931
	}
}

export default card