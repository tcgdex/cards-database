import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イーブイ",
		'zh-tw': "伊布",
		'th-th': "อีวุย",
		'id-id': "Eevee",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "環境の 変化に すぐさま 合わせられるよう いくつもの 進化の 可能性を 秘めている。",
		'zh-tw': "為了能瞬即適應環境的變化，這種寶可夢蘊含著 許多種進化的可能性。",
		'th-th': "มีความสามารถพิเศษในการวิวัฒนาการอย่างหลากหลายเพื่อปรับตัวให้เข้ากับการเปลี่ยนแปลงของสิ่งแวดล้อมได้อย่างทันที",
		'id-id': "Eevee berpotensi untuk berevolusi ke berbagai macam wujud untuk segera dapat beradaptasi terhadap perubahan lingkungan.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "カラフルフレンズ",
				'zh-tw': "鮮豔友情",
				'th-th': "คัลเลอร์ฟูลเฟรนส์",
				'id-id': "Colorful Friends",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札から、それぞれちがうタイプのポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張各不同屬性的寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
				'th-th': "เลือกการ์ดโปเกมอนที่แต่ละใบต่างประเภทกันได้สูงสุด 3 ใบ จากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
				'id-id': "Pilih paling banyak 3 lembar Pokémon yang masing-masing berbeda tipenya dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			},
		},
		{
			name: {
				'ja-jp': "スキップ",
				'zh-tw': "小跳步",
				'th-th': "กระโดดข้าม",
				'id-id': "Skip",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719586,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837490,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837491,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [133],
};

export default card;
