import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ミルタンク",
		'zh-tw': "大奶罐",
		th: "มิลแทงค์"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [241],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "毎日 ミルクを 搾らないと 具合が 悪くなる。 ミルクの 味は 季節によって 変わるぞ。",
		'zh-tw': "如果沒有每天擠鮮奶，身體的狀況就會變糟。鮮奶的風味會隨季節改變。",
		th: "ถ้าไม่รีดนมทุกวันจะมีอาการไม่สบาย รสชาติของนมนั้นจะเปลี่ยนไปตามฤดูกาล"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はつらつタックル",
			'zh-tw': "活潑衝撞",
			th: "ฟื้นกำลังกระแทก"
		},

		damage: "60+",

		effect: {
			ja: "この番、このポケモンのHPを回復していたなら、90ダメージ追加。",
			'zh-tw': "在這個回合，若這隻寶可夢恢復了HP，則增加90點傷害。",
			th: "เทิร์นนี้ ถ้าฟื้นฟู HP ของโปเกมอนนี้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 90"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741880
	}
}

export default card