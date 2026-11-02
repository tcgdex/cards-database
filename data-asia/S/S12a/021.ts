import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "バオッキーVSTAR",
		'zh-tw': "爆香猿VSTAR",
		th: "บาอกกีVSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "ひのたまフィーバー",
				'zh-tw': "火球狂燒",
				th: "ลูกไฟฟีเวอร์",
			},
			damage: "40+",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の山札を上から5枚までトラッシュする。その後、トラッシュした枚数×40ダメージ追加。",
				'zh-tw': "若希望，將自己的牌庫上方最多5張卡丟棄。然後，增加丟棄的張數×40點傷害。",
				th: "หากต้องการ ทิ้งการ์ดได้สูงสุด 5 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด หลังจากนั้น แดเมจจะเพิ่มตามจำนวนการ์ดที่ทิ้งบนตำแหน่งทิ้งการ์ด x40",
			},
		},
		{
			name: {
				ja: "エンバースター",
				'zh-tw': "[VSTAR力量]星星餘火",
				th: "[พลังVSTAR] ดาวคุกรุ่น",
			},
			damage: "30×",
			cost: ["Fire"],
			effect: {
				ja: "自分のトラッシュにあるエネルギーの枚数×30ダメージ。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "造成自己的棄牌區的能量卡的張數×30點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]",
				th: "แดเมจจะเท่ากับจำนวนการ์ดพลังงานบนตำแหน่งทิ้งการ์ดฝ่ายเรา x30 {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687501,
				tcgplayer: 571559,
			},
		},
	],

	evolveFrom: {
		ja: "バオッキーV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [514],
};

export default card;
