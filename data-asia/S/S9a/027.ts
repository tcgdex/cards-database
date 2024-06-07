import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷唇姐",
		ja: "ルージュラ"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "奇異的叫聲聽起來就像是 人類的語言。也有些音樂家 會創作讓迷唇姐唱的曲子。",
		ja: "人間の 言葉のような 不思議な 鳴き声。 ルージュラに 歌わせる 曲を 作る 音楽家もいる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "召喚舞",
			ja: "よびだしダンス"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，將新上場的寶可夢【混亂】。",
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをこんらんにする。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "超念力",
			ja: "ちょうねんりき"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
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
	regulationMark: "F",
	rarity: "Common",
	dexId: [124]
}

export default card