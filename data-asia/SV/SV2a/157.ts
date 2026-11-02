import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "安全ゴーグル",
		'zh-tw': "安全護目鏡",
		th: "แว่นนิรภัย",
		id: "Kacamata Keselamatan",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているたねポケモンの弱点は、すべてなくなる。",
		'zh-tw': "附有這張卡的【基礎】寶可夢的弱點全部消除。",
		th: "จุดอ่อนของโปเกมอน[พื้นฐาน]ที่ติดการ์ดนี้อยู่ ทั้งหมดจะหายไป",
		id: "Pokémon Basic yang mengenakan kartu ini menjadi tidak memiliki Kelemahan.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719610,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837534,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837535,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "G",
	rarity: "Uncommon",
};

export default card;
