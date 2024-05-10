import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "イエッサン",
		'zh-tw': "愛管侍"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [876],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "喜びや 感謝など ハッピーな 気持ちを 求め 人や ポケモンを かいがいしく 世話して まわる。",
		'zh-tw': "為了尋求喜悅和感謝等快樂的心情，會殷勤地 到處找人和寶可夢來照顧。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "そだてじょうず",
			'zh-tw': "育兒高手"
		},

		effect: {
			ja: "自分の場のポケモン1匹から進化するカードを、自分の山札から1枚選び、そのポケモンにのせて進化させる。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張自己的1隻場上寶可夢進化而來的卡，放置於那隻寶可夢身上完成進化。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "さいみんはどう",
			'zh-tw': "催眠波動"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card