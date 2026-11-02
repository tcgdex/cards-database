import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ダダリン",
		'zh-tw': "破破舵輪",
		th: "ดาดาริน",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "海底を 漂う 藻屑が 沈没船の 部品を 取りこんで ゴーストポケモンに 生まれ変わった。",
		'zh-tw': "在海底飄蕩的海藻吸收了沉船的零件後 轉生而成的幽靈寶可夢。",
		th: "เศษสาหร่ายที่ลอยอยู่ก้นทะเลนำพาชิ้นส่วนของซากเรือจมเข้ามารวมกันแล้วเกิดใหม่เป็นโปเกมอนผี",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かいてんアタック",
				'zh-tw': "迴轉攻擊",
				th: "โจมตีหมุนวน",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "スチールアンカー",
				'zh-tw': "鋼鐵船錨",
				th: "สตีลแองเคอร์",
			},
			damage: "80+",
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "自分のベンチに[M]ポケモンがいるなら、80ダメージ追加。",
				'zh-tw': "若自己的備戰區有【鋼】寶可夢，則增加80點傷害。",
				th: "ถ้าบนเบนช์ฝ่ายเรามีโปเกมอน[โลหะ]อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752892,
				tcgplayer: 566162,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [781],
};

export default card;
