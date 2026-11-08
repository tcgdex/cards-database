import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ガチガチバンド",
		'zh-tw': "硬硬束帶",
		'th-th': "สายรัดแข็งเป๊ก",
		'id-id': "Gelang Kaku",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけている1進化ポケモンが、相手のポケモンから受けるワザのダメージは「-30」される。",
		'zh-tw': "附有這張卡的【1階進化】寶可夢，受到對手的寶可夢招式的傷害「-30」點。",
		'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอน[ร่าง1] ที่ติดการ์ดนี้อยู่ จะได้รับจากโปเกมอนฝ่ายตรงข้ามจะถูก [-30]",
		'id-id': "Kerusakan akibat serangan dari Pokémon lawan yang diterima Pokémon Stage 1 yang mengenakan kartu ini berkurang sejumlah 30.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719612,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837538,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837539,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "G",
	rarity: "Uncommon",
};

export default card;
