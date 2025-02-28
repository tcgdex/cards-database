import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "マスカーニャ",
		'zh-tw': "魔幻假面喵",
		'zh-cn': "魔幻假面喵"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [908],
	hp: 160,
	types: ["Grass"],

	description: {
		ja: "浮いているように 見える 花は マント裏の 毛の 反射で 茎を カモフラージュしているのだ。",
		'zh-tw': "看似浮在空中的花， 是牠利用斗蓬內側的毛的反射 將莖隱藏後呈現出的假象。",
		'zh-cn': "看似浮在空中的花， 是牠利用斗蓬內側的毛的反射 將莖隱藏後呈現出的假象。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ショータイム",
			'zh-tw': "表演時間",
			'zh-cn': "表演時間"
		},

		effect: {
			ja: "このポケモンがベンチにいるなら、自分の番に1回使える。このポケモンをバトルポケモンと入れ替える。",
			'zh-tw': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次。將這隻寶可夢與戰鬥寶可夢互換。",
			'zh-cn': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次。將這隻寶可夢與戰鬥寶可夢互換。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ライジングブルーム",
			'zh-tw': "上升綻放",
			'zh-cn': "上升綻放"
		},

		damage: "90+",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex」なら、90ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】」，則增加90點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢為「寶可夢【ex】」，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card