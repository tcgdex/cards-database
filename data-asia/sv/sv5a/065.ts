import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "公民館",
		'zh-tw': "居民會館"
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "この番、手札からサポートを出して使っていたプレイヤーは、自分の番ごとに1回、自分のポケモン全員のHPを、それぞれ「10」回復してよい。",
		'zh-tw': "在每個自己的回合時，可使用1次。在這個回合從手牌使出了支援者卡的玩家，可將自己的所有寶可夢各恢復「10」HP。"
	},

	trainerType: "Stadium",
	regulationMark: "H"
}

export default card