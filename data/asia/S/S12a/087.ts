import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒスイ ダイケンキVSTAR",
		'zh-tw': "洗翠 大劍鬼VSTAR",
		'th-th': "ฮิซุย ไดเคนคิVSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ザンゲツスター",
				'zh-tw': "殘月星星",
				'th-th': "ดาวเดือนค้างฟ้า",
			},
			effect: {
				'ja-jp': "自分の番に使える。相手のポケモン1匹に、ダメカンを4個のせる。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "在自己的回合時可使用。在對手的1隻寶可夢身上放置4個傷害指示物。[對戰中，己方只可使用1次【VSTAR】力量。]",
				'th-th': "ใช้ได้ในเทิร์นฝ่ายเรา วางตัวนับแดเมจ 4 ตัวบนโปเกมอนฝ่ายตรงข้าม 1 ตัว {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "むじひなやいば",
				'zh-tw': "狠心利刃",
				'th-th': "คมดาบไร้ปรานี",
			},
			damage: "110+",
			cost: ["Darkness", "Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンにダメカンがのっているなら、110ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加110點傷害。",
				'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 110",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687649,
				tcgplayer: 571625,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒスイ ダイケンキV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [503],
};

export default card;
