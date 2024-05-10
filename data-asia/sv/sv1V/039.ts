import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "スリーパー",
		'zh-tw': "引夢貘人"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [97],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "どんなときでも 持っている 振り子を 決まったリズムで 揺らしている。 近寄ると なぜか 眠くなる。",
		'zh-tw': "會以固定的節奏擺動著形影不離的鐘擺。一靠近牠 就會不由自主地昏昏欲睡。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ふりこであやつる",
			'zh-tw': "靈擺操縱"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手の場のポケモンが持っているワザを1つ選び、このワザとして使う。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的場上寶可夢持有的招式，作為這個招式使用。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ねんどうだん",
			'zh-tw': "念動彈"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card