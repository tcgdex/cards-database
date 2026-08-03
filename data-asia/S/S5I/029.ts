import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "オコリザル",
		'zh-tw': "火爆猴",
		th: "โอโคริซารุ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "他の ポケモンよりも 脳内の 血管が 丈夫なので 怒り 続けても 元気で いられるのだ。",
		'zh-tw': "和其他的寶可夢比起來，牠的腦血管特別結實，就算一直發怒也能活得好好的。",
		th: "เส้นเลือดในสมองนั้นแข็งแรงกว่าโปเกมอนอื่น ๆ แม้จะโกรธยาวนานแค่ไหนก็แข็งแรงอยู่ได้",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "フィールドクラッシュ",
				'zh-tw': "場地粉碎",
				th: "ทำลายสนาม",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "場に出ている相手のスタジアムをトラッシュする。",
				'zh-tw': "將場上的對手的競技場卡丟棄。",
				th: "ทิ้งการ์ดสเตเดียมฝ่ายตรงข้ามที่วางบนกระดานที่ตำแหน่งทิ้งการ์ด",
			},
		},
		{
			name: {
				ja: "ガチギレボンバー",
				'zh-tw': "暴怒轟炸",
				th: "บอมเบอร์ฟิวส์ขาด",
			},
			damage: "50×",
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "自分のベンチのダメカンがのっているポケモンの数×50ダメージ。",
				'zh-tw': "造成自己的備戰區的身上放置有傷害指示物的寶可夢數量×50點傷害。",
				th: "แดเมจจะเท่ากับจำนวนโปเกมอนบนเบนช์ฝ่ายเราที่มีตัวนับแดเมจวางอยู่ x50",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533367,
				tcgplayer: 568978,
			},
		},
	],

	evolveFrom: {
		ja: "マンキー",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [57],
};

export default card;
