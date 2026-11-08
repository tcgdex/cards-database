import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピッピ",
		'zh-tw': "皮皮",
		'th-th': "ปิปปี",
		'id-id': "Clefairy",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "愛くるしい しぐさと 鳴き声で かわいいと 大人気の ポケモン。 だが めったに 見つからない。",
		'zh-tw': "因可愛的舉止和叫聲而廣受歡迎的寶可夢。 不過很少被人發現。",
		'th-th': "เป็นโปเกมอนน่ารักที่ได้รับความนิยมเป็นอย่างมากเพราะมีลักษณะท่าทางและเสียงร้องที่น่าเอ็นดู แต่แทบจะไม่ค่อยได้พบเห็น",
		'id-id': "Pokémon dengan tingkah dan suaranya yang imut-imut ini populer karena kemanisannya. Akan tetapi, Clefairy sulit untuk ditemukan.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "つきみにさそう",
				'zh-tw': "邀請月見",
				'th-th': "ชวนชมจันทร์",
				'id-id': "Mengundang Memandang Bulan",
			},
			cost: ["Psychic"],
			effect: {
				'ja-jp': "自分の山札から「ピッピ」を3枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張「皮皮」，放置於備戰區。並且重洗牌庫。",
				'th-th': "เลือกการ์ด [ปิปปี] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
				'id-id': "Pilih paling banyak 3 lembar Clefairy dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck.",
			},
		},
		{
			name: {
				'ja-jp': "ひらてうち",
				'zh-tw': "掌擊",
				'th-th': "ฝ่ามือตบ",
				'id-id': "Tampar",
			},
			damage: 20,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719477,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837291,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837292,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [35],
};

export default card;
