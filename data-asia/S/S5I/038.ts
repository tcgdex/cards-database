import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "ズバット",
		'zh-tw': "超音蝠",
		th: "ซูแบท",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		ja: "日光を 浴びると ヤケドするほど 皮膚が 薄い。 寒くなると 群れて 身体を 寄せあい 暖めあうのだ。",
		'zh-tw': "皮膚薄到只要被陽光照射到就會曬傷。當天氣變冷時，會成群靠在一起互相取暖。",
		th: "ผิวบางขนาดที่ผิวจะไหม้เมื่อถูกแสงแดด เมื่ออากาศหนาวจะเกาะกลุ่มเบียดกันเพื่อสร้างความอบอุ่น",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "やみにかくれる",
				'zh-tw': "藏入黑暗",
				th: "ซ่อนในเงามืด",
			},
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
				th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			},
		},
		{
			name: {
				ja: "スピードひこう",
				'zh-tw': "高速飛行",
				th: "บินเร็วจี๋",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533412,
				tcgplayer: 568987,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [41],
};

export default card;
