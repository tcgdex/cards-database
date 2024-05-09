import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ペロッパフ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Akira Komayama",
	dexId: [684],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "１日に 食べる 砂糖は 自分の 体重と 同じ。 糖分が 足りないと ひどく 不機嫌になる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おまつりおんど"
		},

		effect: {
			ja: "場に「お祭り会場」が出ているなら、このポケモンは、持っているワザを2回連続で使える。（1回目のワザで相手のバトルポケモンがきぜつしたなら、次のバトルポケモンが出たあと、2回目のワザを使う。）"
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "そっとのせる"
		},

		effect: {
			ja: "相手のポケモン1匹に、ダメカンを2個のせる。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card
