import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "パワータブレット",
		'zh-tw': "強力糖錠",
		th: "ลูกอมอัดเม็ดเพิ่มพลัง",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "この番、自分の「フュージョン」のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
		'zh-tw': "在這個回合，自己的「匯流」寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
		th: "เทิร์นนี้ แดเมจของท่าต่อสู้ที่โปเกมอน ฝ่ายเรา ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม จะถูก [+30]",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687701,
				tcgplayer: 571677,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577497,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "None",
};

export default card;
