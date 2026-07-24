import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "エレブー",
		'zh-tw': "電擊獸",
		th: "เอเลบู",
		id: "Electabuzz",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "嵐が 来ると 高い 木の まわりに 集まり 雷が 落ちるのを じっと 待ち続ける。",
		'zh-tw': "暴風雨來臨時，牠們會聚集在高大的樹周圍， 靜靜地一直等待落雷。",
		th: "เมื่อมีพายุจะพากันไปรวมตัวบริเวณต้นไม้สูงและเฝ้ารอให้ฟ้าผ่าอย่างใจจดใจจ่อ",
		id: "Ketika badai datang, Electabuzz berkumpul di sekeliling pohon tinggi dan dengan sabar terus menunggu jatuhnya petir.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "エレキコンボ",
				'zh-tw': "電氣合擊",
				th: "อิเล็กทริกคอมโบ",
				id: "Electric Combo",
			},
			damage: "10+",
			cost: ["Lightning"],
			effect: {
				ja: "自分のベンチに「ブーバー」がいるなら、40ダメージ追加。",
				'zh-tw': "若自己的備戰區有「鴨嘴火獸」，則增加40點傷害。",
				th: "ถ้าบนเบนช์ฝ่ายเรามี [บูเบอร์] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 40",
				id: "Jika ada Magmar di Cadangan sendiri, kerusakan yang diberikan bertambah sejumlah 40.",
			},
		},
		{
			name: {
				ja: "なぐる",
				'zh-tw': "打擊",
				th: "ทุบตี",
				id: "Memukul",
			},
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719578,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837474,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837475,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [125],
};

export default card;
