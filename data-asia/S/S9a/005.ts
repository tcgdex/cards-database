import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "赫拉克羅斯",
		ja: "ヘラクロス"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "頭頂的巨角強健無匹。論起力氣，牠剛猛的勁力足以將數名熟習 傳統武藝的大力士一併摔出老遠。",
		ja: "比類なき 角を 頂く。 力比べにては 伝統武芸に 興じる 力自慢 数名を まとめて 投げ飛ばす 剛力なり。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "角撞",
			ja: "つのでつく"
		},

		damage: 40,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "後投",
			ja: "うしろなげ"
		},

		effect: {
			'zh-tw': "自己的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "自分のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [214],

	thirdParty: {
		cardmarket: 609714
	}
}

export default card