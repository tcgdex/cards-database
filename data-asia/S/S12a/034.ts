import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "エレブー",
		'zh-tw': "電擊獸",
		th: "เอเลบู",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "電気を 狙う エレブーの 対策に じめんポケモンを 置く 発電所は 多い。",
		'zh-tw': "很多發電廠會用地面屬性的寶可夢當守衛，藉以對抗 想伺機偷吃電力的電擊獸。",
		th: "มีโรงไฟฟ้าจำนวนมากที่วางโปเกมอนดินไว้เพื่อรับมือกับเอเลบูที่หมายตาพลังงานไฟฟ้า",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "でんじは",
				'zh-tw': "電磁波",
				th: "คลื่นแม่เหล็กไฟฟ้า",
			},
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			},
		},
		{
			name: {
				ja: "ヘッドボルト",
				'zh-tw': "伏特頭擊",
				th: "เฮดโบลท์",
			},
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687514,
				tcgplayer: 571572,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577451,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "None",
	dexId: [125],
};

export default card;
