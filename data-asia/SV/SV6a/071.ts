import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "クレセリア"
	},

	illustrator: "satoma",
	category: "Pokemon",
	dexId: [488],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "飛行するときは ベールのような 羽から 光る 粒子を 出す。 三日月の化身と 呼ばれている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "いやしのまい"
		},

		effect: {
			ja: "自分のポケモン全員のHPを、それぞれ「20」回復する。"
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			ja: "クレセントパージ"
		},

		damage: "80＋",

		effect: {
			ja: "のぞむなら、ウラになっている自分のサイドを1枚選び、オモテにする。その場合、80ダメージ追加。（対戦が終わるまで、そのサイドはオモテのまま。）"
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

	retreat: 1,
	rarity: "None"
}

export default card