import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レアコイル",
		'zh-tw': "三合一磁怪",
		'th-th': "แรคอยล์",
		'id-id': "Magneton",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'ja-jp': "３つのコイルは 強い 磁力で 結びついている。 そばに寄ると 強い 耳鳴りに 襲われる。",
		'zh-tw': "３隻小磁怪因著強烈的磁力而結合。只要靠近牠 就會發生強烈的耳鳴。",
		'th-th': "คอยล์ 3 ตัวเชื่อมต่อกันด้วยพลังงานแม่เหล็กแรงสูง หากเข้าไปใกล้จะเกิดอาการหูอื้อขั้นรุนแรง",
		'id-id': "Tiga Magnemite yang terhubung oleh kekuatan magnet yang kuat. Telingamu akan sakit oleh dengungan kuat jika mendekati Magneton.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ジャンクマグネット",
				'zh-tw': "廢品磁鐵",
				'th-th': "จังก์แมกเน็ท",
				'id-id': "Junk Magnet",
			},
			cost: ["Lightning"],
			effect: {
				'ja-jp': "自分のトラッシュからグッズを2枚まで選び、相手に見せて、手札に加える。",
				'zh-tw': "從自己的棄牌區選擇最多2張物品卡，在給對手看過後加入手牌。",
				'th-th': "เลือกการ์ดไอเท็มได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
				'id-id': "Pilih paling banyak 2 lembar Item dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan.",
			},
		},
		{
			name: {
				'ja-jp': "ヘッドボルト",
				'zh-tw': "伏特頭擊",
				'th-th': "เฮดโบลท์",
				'id-id': "Head Bolt",
			},
			damage: 60,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719524,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837392,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837393,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コイル",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [82],
};

export default card;
