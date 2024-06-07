import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鯰魚王",
		ja: "ナマズン"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "會在沼澤底部建造居所。只要是活著的東西都會吃下肚， 是個不挑食的大胃王。",
		ja: "沼の 底に すみかを つくる。 生き物なら 好き嫌いなく なんでも 食べてしまう 大食らい。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "泥巴射擊",
			ja: "マッドショット"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "大鬧一番",
			ja: "あばれる"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加60點傷害。若為反面，則這隻寶可夢也受到60點傷害。",
			ja: "コインを1回投げオモテなら、60ダメージ追加。ウラなら、このポケモンにも60ダメージ。"
		},

		damage: "120＋",
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [340]
}

export default card