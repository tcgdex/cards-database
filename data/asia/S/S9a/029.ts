import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 火爆獸VSTAR",
		'ja-jp': "ヒスイ バクフーンVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "陰森火焰",
			'ja-jp': "ホロウフレイム"
		},

		effect: {
			'zh-tw': "將3個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
			'ja-jp': "ダメカン3個を、相手のベンチポケモンに好きなようにのせる。"
		},

		damage: 180,
		cost: ["Psychic", "Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]陽炎星星",
			'ja-jp': "カゲロウスター"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置的傷害指示物為4個，則將那隻寶可夢【氣絕】。[對戰中，己方只可使用1次【VSTAR】力量。]",
			'ja-jp': "相手のバトルポケモンにのっているダメカンが4個なら、そのポケモンをきぜつさせる。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		},

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

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609738,
				tcgplayer: 570598,
			},
		},
	],

	retreat: 2,
	regulationMark: "F"
}

export default card