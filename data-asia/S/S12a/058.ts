import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "サマヨール",
		'zh-tw': "彷徨夜靈",
		th: "ซามาโยรุ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体の 中は 空っぽ。 口を 開けると ブラックホールの ように なんでも 吸いこんでしまう。",
		'zh-tw': "身體內部是空的。只要一張開嘴就會像 黑洞一樣吸入所有東西。",
		th: "ภายในร่างกายว่างเปล่า เมื่ออ้าปากจะเกิดเป็นหลุมดำที่ไม่ว่าอะไรก็สูบเข้าไปได้",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "あんこく",
				'zh-tw': "漆黑",
				th: "ความมืดมน",
			},
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687538,
				tcgplayer: 571596,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577461,
			},
		},
	],

	evolveFrom: {
		ja: "ヨマワル",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "None",
	dexId: [356],
};

export default card;
