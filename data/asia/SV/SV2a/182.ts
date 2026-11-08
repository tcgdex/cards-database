import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハクリュー",
		'zh-tw': "哈克龍",
		'th-th': "ฮาคุริว",
		'id-id': "Dragonair",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		'ja-jp': "全身から オーラが 出されると あたりの 天候が みるみるうちに 変わっていく という。",
		'zh-tw': "據說牠全身上下散發出氣場時，周圍的天氣就會在轉眼間為之一變。",
		'th-th': "ว่ากันว่าอากาศโดยรอบจะเปลี่ยนไปทันทีที่มันปล่อยออร่าออกมาจากทั่วทั้งตัว",
		'id-id': "Dikabarkan jika Dragonair mengeluarkan aura dari seluruh tubuhnya, cuaca di sekitarnya langsung berubah.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "たたく",
				'zh-tw': "敲擊",
				'th-th': "ตี",
				'id-id': "Menghantam",
			},
			damage: 20,
			cost: ["Water"],
		},
		{
			name: {
				'ja-jp': "アクアスラッシュ",
				'zh-tw': "水流斬",
				'th-th': "อควาสแลช",
				'id-id': "Aqua Slash",
			},
			damage: 90,
			cost: ["Water", "Lightning"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
				'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719635,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ミニリュウ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Illustration rare",
	dexId: [148],
};

export default card;
