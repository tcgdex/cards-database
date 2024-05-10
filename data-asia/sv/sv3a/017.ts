import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "デンチュラ",
		'zh-tw': "電蜘蛛"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [596],
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "飛ぶのが ヘタな ヒナを 狙い 鳥ポケモンの 巣の 近くに 電気の 糸で 罠を 張るぞ。",
		'zh-tw': "為了捕捉不太會飛的幼鳥，會在鳥寶可夢的巢穴附近 用帶電的絲設下陷阱。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "エレキバレット",
			'zh-tw': "電氣子彈"
		},

		damage: 50,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card