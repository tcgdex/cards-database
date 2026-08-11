import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "大きなふうせん",
		'zh-tw': "大氣球",
		th: "ลูกโป่งยักษ์",
		id: "Balon Besar",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている2進化ポケモンのにげるためのエネルギーは、すべてなくなる。",
		'zh-tw': "附有這張卡的【2階進化】寶可夢【撤退】所需的能量全部消除。",
		th: "พลังงานสำหรับ[หนี]ของโปเกมอน[ร่าง2] ที่ติดการ์ดนี้อยู่ ทั้งหมดจะหายไป",
		id: "Pokémon Stage 2 yang mengenakan kartu ini menjadi tidak membutuhkan Energi untuk Mundur.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719611,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837536,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837537,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "G",
	rarity: "Uncommon",
};

export default card;
