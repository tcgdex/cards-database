import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿勃梭魯",
		ja: "アブソル"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "由於擁有察覺危險的能力，因此牠被人們誤解是 會招來災禍的寶可夢。",
		ja: "風のように 野山を 駆けぬける。 弓なりの ツノは 自然災害の 予兆を 敏感に 感じとる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "漩渦災禍",
			ja: "うずまくわざわい"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到10點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のポケモン全員に、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "抓裂",
			ja: "ツメでえぐる"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加70點傷害。",
			ja: "相手のバトルポケモンにダメカンがのっているなら、70ダメージ追加。"
		},

		damage: "50＋",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [359],

	thirdParty: {
		cardmarket: 609819
	}
}

export default card