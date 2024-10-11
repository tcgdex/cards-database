import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャオニクス"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [678],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "強力な サイコパワーを 出し続けていると ニャオニクスの 肉体にも ダメージが およぶ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "さそうしっぽ"
		},

		effect: {
			ja: "自分の番に、自分の手札から「のんびりじゃらし」を1枚トラッシュするなら、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "サイコショット"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card