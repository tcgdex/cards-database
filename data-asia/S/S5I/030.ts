import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "グライガー",
		'zh-tw': "天蠍",
		th: "ไกลกา",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "顔面 めがけて 飛んでくる。 張りつかれた 獲物が 驚く あいだに 毒針を 刺しこむ。",
		'zh-tw': "會朝著獵物迎面飛來，然後趁著被纏上的獵物驚慌失措時刺入毒針。",
		th: "เล็งไปที่ใบหน้าแล้วบินเข้ามา จะแทงเข็มพิษเข้าไประหว่างที่เหยื่อถูกขึงติดไว้ตกใจ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "きりさく",
				'zh-tw': "劈開",
				th: "ฟันแหลก",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533372,
				tcgplayer: 568979,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [207],
};

export default card;
