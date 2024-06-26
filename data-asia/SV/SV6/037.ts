import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノツツミ",
		'zh-tw': "鐵包袱",
		th: "ถุงเหล็ก"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "nagimiso",
	dexId: [991],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "古い 書物に 登場する 謎の 物体に 似た ポケモン。 目撃例は 過去 ２件のみ。",
		'zh-tw': "與古書裡記載的神秘物體 長得很相像的寶可夢。 過去只被目擊過２次。",
		th: "โปเกมอนที่มีความคล้ายคลึงกับวัตถุลึกลับที่ปรากฏในบันทึกเก่าแก่ ในอดีตมีข้อมูลว่ามีผู้พบเห็นเพียง 2 ครั้งเท่านั้น"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "インタージェット",
			'zh-tw': "內部噴射",
			th: "อินเทอร์เจ็ต"
		},

		damage: 60,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。然後，對手將對手自己的戰鬥寶可夢與備戰寶可夢互換。",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์ หลังจากนั้น ฝ่ายตรงข้ามสลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเองกับโปเกมอนบนเบนช์"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card