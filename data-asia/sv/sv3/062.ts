import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ルガルガン",
		'zh-tw': "鬃岩狼人"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [745],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "岩の たてがみで 近づくものを 切りつける。 トレーナーの 指示も 気に入らなければ 従わない。",
		'zh-tw': "會用岩石鬃毛斬斷接近者。只要不合自己的意，即使是訓練家下的指示也不會順從。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "とどめのキバ",
			'zh-tw': "致命之牙"
		},

		damage: 90,

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっていないなら、このワザは失敗。",
			'zh-tw': "若對手的戰鬥寶可夢身上沒有放置傷害指示物，則這個招式失敗。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "スラッシュクロー",
			'zh-tw': "利爪揮砍"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card