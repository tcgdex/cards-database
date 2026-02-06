import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドダイトスex",
		'zh-tw': "土台龜ex",
		th: "โดไดโทสex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "もりのこうしん",
			'zh-tw': "森林行進",
			th: "ป่าเดินแถว"
		},

		damage: "30×",

		effect: {
			ja: "自分の場のポケモンの数×30ダメージ。",
			'zh-tw': "造成自己的場上【草】寶可夢的數量×30點傷害。",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอน[หญ้า]บนกระดานฝ่ายเรา x30"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "ジャングルハンマー",
			'zh-tw': "叢林之錘",
			th: "จังเกิลแฮมเมอร์"
		},

		damage: 150,

		effect: {
			ja: "このポケモンのHPを「50」回復する。",
			'zh-tw': "將這隻寶可夢恢復「50」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [50]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752747
	}
}

export default card