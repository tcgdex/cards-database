import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "カミツオロチ",
		'zh-tw': "蜜集大蛇",
		'zh-cn': "蜜集大蛇"
	},

	illustrator: "Jerky",
	rarity: "None",
	category: "Pokemon",
	dexId: [1019],
	hp: 170,
	types: ["Grass"],

	description: {
		ja: "７匹の オロチュが 蜜飴で 作った りんごのなかで 暮らす。 真ん中の オロチュが 司令塔。",
		'zh-tw': "７隻蛇蟲蟲住在 蜜糖製成的蘋果裡。 由正中央的蛇蟲蟲發號施令。",
		'zh-cn': "７隻蛇蟲蟲住在 蜜糖製成的蘋果裡。 由正中央的蛇蟲蟲發號施令。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "オロチブレス",
			'zh-tw': "大蛇吐息",
			'zh-cn': "大蛇吐息"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を6枚トラッシュし、相手のバトルポケモンをきぜつさせる。6枚トラッシュできないなら、このワザは失敗。",
			'zh-tw': "從自己的手牌將6張「基本【草】能量」卡丟棄，將對手的戰鬥寶可夢【昏厥】。若無法丟棄6張，則這個招式失敗。",
			'zh-cn': "從自己的手牌將6張「基本【草】能量」卡丟棄，將對手的戰鬥寶可夢【昏厥】。若無法丟棄6張，則這個招式失敗。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "ウィップスマッシュ",
			'zh-tw': "鞭打粉碎",
			'zh-cn': "鞭打粉碎"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card