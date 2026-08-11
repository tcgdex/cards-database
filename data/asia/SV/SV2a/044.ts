import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クサイハナ",
		'zh-tw': "臭臭花",
		'th-th': "คุไซฮานะ",
		'id-id': "Gloom",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "よだれのように 見える 甘い蜜。 とても ねばねば しており 触れると いつまでも まとわりつく。",
		'zh-tw': "看似口水的東西其實是甜甜的蜜。非常黏稠， 只要碰到就會一直黏住。",
		'th-th': "น้ำหวาน ๆ ของดอกไม้ที่ดูเหมือนน้ำลายหยดนั้น เหนียวหนืดมาก ถ้าไปโดนเข้าล่ะก็จะติดไปตลอดเลย",
		'id-id': "Gloom mengeluarkan madu manis yang terlihat seperti air liur. Sangat lengket dan menempel dengan lekat jika disentuh.",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "さんぶざきエナジー",
				'zh-tw': "三成能量",
				'th-th': "พลังงานแรกแย้ม",
				'id-id': "Energi Mekar Sepertiga",
			},
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を上から3枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
				'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。查看自己的牌庫上方3張卡，從其中選擇任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。",
				'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง ดูการ์ด 3 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดพลังงานพื้นฐานจากในนั้นตามจำนวนที่ชอบ ติดที่โปเกมอนฝ่ายเราตามชอบ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
				'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Lihat 3 kartu dari atas Deck sendiri, pilih sesukanya Energi Dasar di antaranya, lalu kenakan sesukanya pada Pokémon sendiri. Kocok kembali sisa kartu ke Deck.",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "よだれ",
				'zh-tw': "口水",
				'th-th': "น้ำลายยืด",
				'id-id': "Liur",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719486,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837305,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837306,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ナゾノクサ",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [44],
};

export default card;
