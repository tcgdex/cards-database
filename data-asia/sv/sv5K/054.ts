import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ホーホー",
		'zh-tw': "咕咕",
		th: "โฮโฮ",
		'zh-cn': "咕咕"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [163],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "いつも 一本足で 立っている。 脚を 入れ替える 瞬間は 素早くて なかなか 見られない。",
		'zh-tw': "總是用單腳站立。由於換腳的速度太快， 很難用肉眼看清換腳的瞬間。",
		th: "มักจะยืนด้วยขาเดียว ตอนสลับขาจะรวดเร็วมากจนมองไม่เห็น",
		'zh-cn': "總是用單腳站立。由於換腳的速度太快， 很難用肉眼看清換腳的瞬間。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "サイレントウイング",
			'zh-tw': "靜默之翼",
			th: "ไซเลนต์วิง",
			'zh-cn': "靜默之翼"
		},

		damage: 20,

		effect: {
			ja: "相手の手札を見る。",
			'zh-tw': "查看對手的手牌。",
			th: "ดูการ์ดบนมือฝ่ายตรงข้าม",
			'zh-cn': "查看對手的手牌。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card