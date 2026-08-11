import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブル",
		'zh-tw': "電擊魔獸",
		th: "เอเลคิเบิล",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "発電量は 心拍数と 比例する。 戦いになると 一気に ボルテージが 上がるのだ。",
		'zh-tw': "發電量與心跳數成正比。當牠面臨戰鬥的時候， 電壓就會急速飆升。",
		th: "ปริมาณไฟฟ้าที่ผลิตนั้นแปรผันตามอัตราการเต้นของหัวใจ เมื่อเข้าสู่การต่อสู้ แรงดันไฟฟ้าจะพุ่งสูงขึ้นในหนึ่งอึดใจ",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ろうでんナックル",
				'zh-tw': "漏電關節",
				th: "สนับมือไฟรั่ว",
			},
			damage: "40+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の場に[W]ポケモンがいるなら、120ダメージ追加。",
				'zh-tw': "若對手的場上有【水】寶可夢，則增加120點傷害。",
				th: "ถ้าบนกระดานฝ่ายตรงข้ามมีโปเกมอน[น้ำ]อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			},
		},
		{
			name: {
				ja: "エレキスラッグ",
				'zh-tw': "電氣猛擊",
				th: "อิเล็กทริกสลัก",
			},
			damage: 140,
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752907,
				tcgplayer: 566177,
			},
		},
	],

	evolveFrom: {
		ja: "エレブー",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [466],
};

export default card;
