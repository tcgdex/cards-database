import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "アップリューV",
		'zh-tw': "蘋裹龍V",
		th: "แอปปริวV",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "すっぱいだえき",
				'zh-tw': "酸酸唾液",
				th: "น้ำลายเปรี้ยว",
			},
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、ワザを使うためのエネルギーが、【無】エネルギー2個ぶん多くなる。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量增加2個【無】能量。",
				th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ พลังงานสำหรับใช้ท่าต่อสู้จะใช้พลังงาน [ไร้สี] เพิ่มขึ้น 2 ลูก",
			},
		},
		{
			name: {
				ja: "つばさでうつ",
				'zh-tw': "翅膀攻擊",
				th: "โจมตีด้วยปีก",
			},
			damage: 120,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 533257,
				tcgplayer: 568955,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [841],
};

export default card;
