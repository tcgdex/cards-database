import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モンジャラ",
		'zh-tw': "蔓藤怪",
		'th-th': "มอนจารา",
		'id-id': "Tangela",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。",
		'zh-tw': "藤蔓即使斷了也會繼續無限地生長。藤蔓下的真面目至今仍是個謎。",
		'th-th': "แม้เถาวัลย์จะขาดก็ยืดยาวออกมาได้ไม่มีที่สิ้นสุด ตัวตนลึก ๆ ที่แท้จริงของมัน จนทุกวันนี้ก็ยังพิสูจน์ไม่ได้",
		'id-id': "Hingga saat ini, wujud asli Tangela di balik jalar yang terus tumbuh tanpa batas walau dicabut ini masih belum terungkap.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "まきつきさほう",
				'zh-tw': "緊束作法",
				'th-th': "วิธีการพันเลื้อย",
				'id-id': "Etiket Membelit",
			},
			damage: "10+",
			cost: ["Grass"],
			effect: {
				'ja-jp': "この番、手札から「エリカの招待」を出して使っていたなら、60ダメージ追加。",
				'zh-tw': "在這個回合，若從手牌使出了「莉佳的招待」，則增加60點傷害。",
				'th-th': "เทิร์นนี้ ถ้านำการ์ด [คำเชิญของเอริกะ] จากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 60",
				'id-id': "Jika pada giliran ini, Undangan Erika telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 60.",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719631,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Illustration rare",
	dexId: [114],
};

export default card;
