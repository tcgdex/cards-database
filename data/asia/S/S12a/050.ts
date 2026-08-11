import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツーV",
		'zh-tw': "超夢V",
		th: "มิวทูV",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ちょうねんりき",
				'zh-tw': "超念力",
				th: "ซูเปอร์โทรจิต",
			},
			damage: 50,
			cost: ["Psychic", "Colorless"],
		},
		{
			name: {
				ja: "トランスブレイク",
				'zh-tw': "轉移破壞",
				th: "ทรานส์เบรก",
			},
			damage: 160,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
				th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687530,
				tcgplayer: 571588,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [150],
};

export default card;
