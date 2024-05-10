import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "フラージェス",
		'zh-tw': "花潔夫人"
	},

	illustrator: "Ligton",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [671],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "フラージェスの 作った 花園は 心と 体を 癒す パワーが 絶えず 降り注いでいるという。",
		'zh-tw': "據說花潔夫人打造的花園裡 會源源不絕地傾注著 能夠治癒身心的力量。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みわくのいざない",
			'zh-tw': "媚惑引誘"
		},

		effect: {
			ja: "自分の番に1回使える。コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをこんらんにする。",
			'zh-tw': "在自己的回合時可使用1次。擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，將新上場的寶可夢【混亂】。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "マジカルショット",
			'zh-tw': "魔法射擊"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card