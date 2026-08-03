import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "リーフィアVSTAR",
		'zh-tw': "葉伊布VSTAR",
		th: "ลีเฟียVSTAR",
	},

	illustrator: "PLANETA Hiiragi",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "アイビースター",
				'zh-tw': "常春藤星星",
				th: "ไอวี่สตาร์",
			},
			effect: {
				ja: "自分の番に使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "在自己的回合時可使用。選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。[對戰中，己方只可使用1次【VSTAR】力量。]",
				th: "ใช้ได้ในเทิร์นฝ่ายเรา เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว แล้วสลับกับโปเกมอนบนตำแหน่งต่อสู้ {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "リーフガード",
				'zh-tw': "葉子防守",
				th: "ใบไม้ป้องกัน",
			},
			damage: 180,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
				th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับ จะถูก [-30]",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687492,
				tcgplayer: 571550,
			},
		},
	],

	evolveFrom: {
		ja: "リーフィアV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [470],
};

export default card;
