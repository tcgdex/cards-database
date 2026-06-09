import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "結草貴婦",
		ja: "ミノマダム"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "從結草兒進化過來時，蓑衣成了身體的一部分。 一輩子都不會脫下蓑衣。",
		ja: "ミノムッチから 進化したとき ミノが 体の 一部に なった。 一生 ミノを 脱ぐことはない。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "貴婦之怒",
			ja: "マダムのいかり"
		},

		effect: {
			'zh-tw': "增加自己的棄牌區的寶可夢卡的張數×10點傷害。",
			ja: "自分のトラッシュにあるポケモンの枚数×10ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "束縛",
			ja: "しばりつける"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [413],

	thirdParty: {
		cardmarket: 605861
	}
}

export default card