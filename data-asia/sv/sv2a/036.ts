import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピクシー"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [36],
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "１キロ先に 落ちた 針の 音も 聞こえるほど 耳が いいので ふだんは 静かな ところに いる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "このゆびとまれ"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			ja: "アディショナルムーン"
		},

		damage: 50,

		effect: {
			ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、サイドを1枚多くとる。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card