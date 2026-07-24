import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンタロス",
		'zh-tw': "肯泰羅",
		th: "เคนเทารอส",
		id: "Tauros",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "獲物に 狙いを つけると 尻尾で 体を 叩きながら まっすぐ 突っ込んでくる。",
		'zh-tw': "鎖定了獵物之後，就會一邊用尾巴抽打身體， 一邊筆直地衝向目標。",
		th: "เมื่อเล็งเหยื่อ จะใช้หางตีตัวเองพร้อมกับพุ่งตรงเข้าไป",
		id: "Begitu menentukan sasarannya, Tauros mencambuk tubuhnya sendiri menggunakan ekornya dan menerjang lurus ke depan.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "むれをあつめる",
				'zh-tw': "群集",
				th: "รวบรวมฝูง",
				id: "Mengumpulkan Gerombolan",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
				id: "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck.",
			},
		},
		{
			name: {
				ja: "いかり",
				'zh-tw': "憤怒",
				th: "พิโรธ",
				id: "Amarah",
			},
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
				'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
				th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
				id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini.",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719581,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837480,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837481,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [128],
};

export default card;
