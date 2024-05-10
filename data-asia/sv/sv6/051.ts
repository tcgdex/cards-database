import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ペロッパフ",
		'zh-tw': "綿綿泡芙"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Akira Komayama",
	dexId: [684],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "１日に 食べる 砂糖は 自分の 体重と 同じ。 糖分が 足りないと ひどく 不機嫌になる。",
		'zh-tw': "每天要吃掉與自己體重 相同重量的砂糖， 糖分不夠就會鬧脾氣。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おまつりおんど",
			'zh-tw': "祭典樂舞"
		},

		effect: {
			ja: "場に「お祭り会場」が出ているなら、このポケモンは、持っているワザを2回連続で使える。（1回目のワザで相手のバトルポケモンがきぜつしたなら、次のバトルポケモンが出たあと、2回目のワザを使う。）",
			'zh-tw': "若場上有「祭典會場」，則這隻寶可夢可使用持有的招式2次。（若對手的戰鬥寶可夢因第1次的招式而【昏厥】了，則在下一隻寶可夢放置後，使用第2次的招式。）"
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "そっとのせる",
			'zh-tw': "悄聲加害"
		},

		effect: {
			ja: "相手のポケモン1匹に、ダメカンを2個のせる。",
			'zh-tw': "在對手的1隻寶可夢身上放置2個傷害指示物。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
