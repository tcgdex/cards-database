import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルナトーン",
		'zh-tw': "月石",
		'th-th': "ลูนาโทน",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "月の 満ち欠けと パワーの 増減が 関係 しているらしく 満月の 夜 活発になる。",
		'zh-tw': "月亮的盈虧似乎會影響牠力量的增減。 每到滿月之夜就會變得活躍。",
		'th-th': "ดูเหมือนว่าพลังที่เพิ่มลดนั้นเกี่ยวเนื่องกับข้างขึ้นข้างแรมของดวงจันทร์ คืนที่พระจันทร์เต็มดวงจะกระปรี้กระเปร่า",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "サイクルドロー",
				'zh-tw': "循環抽出",
				'th-th': "ไซเคิลดรอว์",
			},
			cost: ["Psychic"],
			effect: {
				'ja-jp': "自分の手札を1枚トラッシュする。その後、自分の山札を3枚引く。",
				'zh-tw': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出3張卡。",
				'th-th': "ทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ด หลังจากนั้น จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
			},
		},
		{
			name: {
				'ja-jp': "ムーンキネシス",
				'zh-tw': "月亮強念",
				'th-th': "มูนคิเนซิส",
			},
			damage: "30+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[P]エネルギーの数×30ダメージ追加。",
				'zh-tw': "增加這隻寶可夢身上附加的【超】能量的數量×30點傷害。",
				'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงาน[พลังจิต]ที่ติดอยู่กับโปเกมอนนี้ x30",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687536,
				tcgplayer: 571594,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577459,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "None",
	dexId: [337],
};

export default card;
