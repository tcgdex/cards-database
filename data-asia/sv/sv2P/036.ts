import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ポットデス"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [855],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "紅茶で できた 体は クセは あるものの 美味しいが 飲みすぎると 死んでしまうことも。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "こっとうあつめ"
		},

		effect: {
			ja: "自分のトラッシュから「グッズ」と「ポケモンのどうぐ」を合計2枚まで選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "おちゃをそそぐ"
		},

		effect: {
			ja: "相手のバトルポケモンに、ダメカンを5個のせる。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card