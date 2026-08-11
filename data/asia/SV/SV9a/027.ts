import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "カスミのラプラス",
		'zh-tw': "<小霞的>拉普拉斯",
		'zh-cn': "<小霞的>拉普拉斯"
	},

	illustrator: "En Morikura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [131],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "人を 背中に乗せて 海を行く。 機嫌がいいと きれいな 鳴き声で 歌うことも あるらしい。",
		'zh-tw': "會把人類載在背上渡過大海。 據說在牠心情好的時候， 還會用美妙的叫聲來唱歌。",
		'zh-cn': "會把人類載在背上渡過大海。 據說在牠心情好的時候， 還會用美妙的叫聲來唱歌。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "いっしょにおよぐ",
			'zh-tw': "一起游水",
			'zh-cn': "一起游水"
		},

		effect: {
			ja: "自分の山札から「カスミのポケモン」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張「小霞的寶可夢」，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多3張「小霞的寶可夢」，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "なみのり",
			'zh-tw': "衝浪",
			'zh-cn': "衝浪"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card