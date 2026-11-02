import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "カメール",
		'zh-tw': "卡咪龜",
		th: "คาเมล",
		id: "Wartortle",
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "ふさふさの 耳と しっぽを たくみに 操って 水中での バランスを たもつ。",
		'zh-tw': "會靈巧地擺動自己毛茸茸的耳朵和尾巴， 藉此在水中保持平衡。",
		th: "ใช้หูและหางได้อย่างคล่องแคล่วเพื่อรักษาสมดุลขณะอยู่ในน้ำ",
		id: "Wartortle mengendalikan telinga dan ekornya yang berbulu lebat untuk menjaga keseimbangan di dalam air.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "すもぐり",
				'zh-tw': "自由潛水",
				th: "มุดเข้ารัง",
				id: "Berbenam Diri",
			},
			cost: ["Water"],
			effect: {
				ja: "自分のトラッシュから「基本[W]エネルギー」を3枚まで選び、相手に見せて、手札に加える。",
				'zh-tw': "從自己的棄牌區選擇最多3張「基本【水】能量」卡，在給對手看過後加入手牌。",
				th: "เลือกการ์ด [พลังงานพื้นฐาน[น้ำ]] ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
				id: "Pilih paling banyak 3 lembar Energi Dasar {Air} dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan.",
			},
		},
		{
			name: {
				ja: "かいてんアタック",
				'zh-tw': "迴轉攻擊",
				th: "โจมตีหมุนวน",
				id: "Serangan Berputar",
			},
			damage: 50,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719450,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837240,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837241,
			},
		},
	],

	evolveFrom: {
		ja: "ゼニガメ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [8],
};

export default card;
