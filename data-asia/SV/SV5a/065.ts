import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "公民館",
		'zh-tw': "居民會館",
		th: "ศาลาประชาคม"
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "この番、手札からサポートを出して使っていたプレイヤーは、自分の番ごとに1回、自分のポケモン全員のHPを、それぞれ「10」回復してよい。",
		'zh-tw': "在每個自己的回合時，可使用1次。在這個回合從手牌使出了支援者卡的玩家，可將自己的所有寶可夢各恢復「10」HP。",
		th: "เทิร์นนี้ ผู้เล่นที่นำการ์ดซัพพอร์ตจากบนมือออกมาใช้แล้ว ในแต่ละเทิร์นของตัวเองทำได้ 1 ครั้ง จะฟื้นฟู HP ของโปเกมอนฝ่ายตัวเองทุกตัว ตัวละ [10] ก็ได้"
	},

	trainerType: "Stadium",
	regulationMark: "H"
}

export default card