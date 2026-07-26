import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキメノコ",
		'zh-tw': "雪妖女",
		th: "ยูกิเมโนโกะ",
	},

	illustrator: "Makura Tami",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "マイナス５０度の 息を 吹きかけ 凍らせた 獲物を 秘密の 場所に 飾っていると 言われる。",
		'zh-tw': "據說會吐出零下５０度的 氣息凍結獵物，然後帶到 秘密的地方裝飾起來。",
		th: "ว่ากันว่าเอาเหยื่อที่แช่แข็งด้วยการเป่าไอเย็นติดลบ 50 องศาเซลเซียสใส่ไปวางตกแต่งในสถานที่ลับ",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "いてつくとばり",
				'zh-tw': "冰冷之帳",
				th: "ฉากกั้นแช่แข็ง",
			},
			effect: {
				ja: "このポケモンがいるかぎり、ポケモンチェックのたび、おたがいの特性を持つポケモン（「ユキメノコ」をのぞく）全員に、それぞれダメカンを1個のせる。",
				'zh-tw': "只要這隻寶可夢在場上，每次寶可夢檢查時，在雙方的擁有特性的所有寶可夢（「雪妖女」除外）身上各放置1個傷害指示物。",
				th: "ตราบใดที่โปเกมอนนี้ยังอยู่ ทุกครั้งที่ตรวจสอบโปเกมอน ให้วางตัวนับแดเมจบนโปเกมอนที่มีความสามารถของทั้งสองฝ่ายทุกตัว (ยกเว้น [ยูกิเมโนโกะ]) ตัวละ 1 ตัว",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "フロストスマッシュ",
				'zh-tw': "冰霜粉碎",
				th: "ฟรอสต์สแมช",
			},
			damage: 60,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767126,
				tcgplayer: 568023,
			},
		},
	],

	evolveFrom: {
		ja: "ユキワラシ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [478],
};

export default card;
