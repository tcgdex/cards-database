import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ギギアル",
		'zh-tw': "齒輪組",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "本気の ときは でかギアの 外の 歯車と ちびギアが 合致。 回転速度が 飛躍 するのだ。",
		'zh-tw': "如果認真起來，大齒輪外圈的齒輪會和小齒輪完全接合。此時轉速將會大幅提升。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ギアソーサー",
				'zh-tw': "齒輪飛盤",
			},
			damage: "80×",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×80ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673045,
				tcgplayer: 570810,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570894,
			},
		},
	],

	evolveFrom: {
		ja: "ギアル",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [600],
};

export default card;
