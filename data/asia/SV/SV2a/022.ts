import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オニドリル",
		'zh-tw': "大嘴雀",
		'th-th': "โอนิดริล",
		'id-id': "Fearow",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'ja-jp': "オニドリルの 縄張りで 食べ物を 持って 歩くのは 危険だ。 あっという 間に かっさらわれるぞ。",
		'zh-tw': "在大嘴雀的地盤上帶著食物走動是件危險的事， 食物轉眼間就會被奪走。",
		'th-th': "การถือของกินเดินเข้าไปในอาณาเขตของโอนิดริลเป็นเรื่องที่อันตรายอย่างยิ่ง เพราะจะถูกฉกแย่งหายไปโดยที่ไม่ทันได้ตั้งตัว",
		'id-id': "Berbahaya jika berjalan sambil membawa makanan di daerah kekuasaan Fearow. Pokémon ini akan menyambarnya dalam sekejap.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "くちばしキャッチ",
				'zh-tw': "鳥嘴捕捉",
				'th-th': "จะงอยจับ",
				'id-id': "Paruh Penangkap",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札から好きなカードを3枚まで選び、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫任意選擇最多3張卡加入手牌。並且重洗牌庫。",
				'th-th': "เลือกการ์ดที่ชอบได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด",
				'id-id': "Pilih paling banyak 3 kartu sesukanya dari Deck sendiri, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			},
		},
		{
			name: {
				'ja-jp': "スピードひこう",
				'zh-tw': "高速飛行",
				'th-th': "บินเร็วจี๋",
				'id-id': "Terbang Cepat",
			},
			damage: 50,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719464,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837267,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837268,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "オニスズメ",
	},

	retreat: 0,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [22],
};

export default card;
