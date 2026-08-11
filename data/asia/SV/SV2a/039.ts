import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プリン",
		'zh-tw': "胖丁",
		'th-th': "พูริน",
		'id-id': "Jigglypuff",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "つぶらな 瞳が 揺れるとき 眠たくなるような 不思議で 気持ちのいい 歌を 歌う。",
		'zh-tw': "當牠圓圓的大眼睛轉動時，就會唱起奇妙的歌曲， 讓人舒服地昏昏欲睡。",
		'th-th': "เมื่อตากลมโตสั่นไหว จะร้องเพลงที่ทำให้ง่วงนอนและรู้สึกดีอย่างน่าประหลาด",
		'id-id': "Jigglypuff menyanyikan lagu ajaib yang menenangkan dan membuat siapa pun jadi mengantuk ketika mata bulatnya bergerak.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "みちびく",
				'zh-tw': "引路",
				'th-th': "นำทาง",
				'id-id': "Menuntun",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
				'th-th': "เลือกการ์ดซัพพอร์ต 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
				'id-id': "Pilih 1 lembar Supporter dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			},
		},
		{
			name: {
				'ja-jp': "ふみふみ",
				'zh-tw': "踏踏",
				'th-th': "กระทืบเท้า",
				'id-id': "Injak-injak",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数×20ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。",
				'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20",
				'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan.",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719481,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837297,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837298,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [39],
};

export default card;
