import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "代歐奇希斯VSTAR",
		ja: "デオキシスVSTAR"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "精神標槍",
			ja: "サイコジャベリン"
		},

		effect: {
			'zh-tw': "對手的備戰區的1隻「寶可夢【V】」也受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のベンチの「ポケモンV」1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 190,
		cost: ["Psychic", "Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星神力",
			ja: "スターフォース"
		},

		effect: {
			'zh-tw': "造成雙方的戰鬥寶可夢身上附加的能量的數量×60點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]",
			ja: "おたがいのバトルポケモンについているエネルギーの数×60ダメージ。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		},

		damage: "60×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 687785
	}
}

export default card