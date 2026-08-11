import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "セキタンザン",
		'zh-tw': "巨炭山",
		th: "เซคิทันซัง",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "戦いになると 石炭の 山が 真っ赤に 燃え上がり 火の粉を まき散らして 周囲を 焦がす。",
		'zh-tw': "進入戰鬥狀態後，牠會把煤炭山燃燒得通紅，飛撒火花來燒焦四周。",
		th: "พอถึงคราวต่อสู้ ภูเขาถ่านหินของมันจะลุกเป็นไฟสีแดงเข้ม ปล่อยประกายไฟออกมาเผาไหม้บริเวณโดยรอบ",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "せきたんほう",
				'zh-tw': "煤炭炮",
				th: "ปืนใหญ่ถ่านหิน",
			},
			damage: "90×",
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×90ダメージ。",
				'zh-tw': "擲與這隻寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×90點傷害。",
				th: "ทอยเหรียญตามจำนวนครั้งของจำนวนพลังงานที่ติดกับโปเกมอนนี้ แดเมจจะเท่ากับ จำนวนครั้งที่ออกหัว x90",
			},
		},
		{
			name: {
				ja: "ワイルドタックル",
				'zh-tw': "狂野衝撞",
				th: "ไวลด์แทคเคิล",
			},
			damage: 200,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも50ダメージ。",
				'zh-tw': "這隻寶可夢也受到50點傷害。",
				th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 50 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 533392,
				tcgplayer: 568983,
			},
		},
	],

	evolveFrom: {
		ja: "トロッゴン",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [839],
};

export default card;
