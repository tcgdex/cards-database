import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "エンニュート",
		'zh-tw': "焰后蜥",
		th: "เอ็นนิวท์",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "エンニュート同士の 争いは 引き連れている オスの ヤトウモリの 数で 勝敗が 決まるらしい。",
		'zh-tw': "據說焰后蜥之間在爭鬥時，是透過比拼誰帶著更多隻雄性夜盜火蜥來定勝負的。",
		th: "ดูเหมือนว่าการต่อสู้ของเอ็นนิวท์ด้วยกันเอง จะแพ้หรือชนะขึ้นอยู่กับจำนวนของยาโทโมริตัวผู้ที่พามาด้วย",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "まどわす",
				'zh-tw': "蠱惑",
				th: "ทำให้สับสน",
			},
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [สับสน]",
			},
		},
		{
			name: {
				ja: "なぶりやき",
				'zh-tw': "燒壞",
				th: "เผาเย้าแหย่",
			},
			damage: "90×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが受けている特殊状態の数×90ダメージ。",
				'zh-tw': "造成對手的戰鬥寶可夢處於特殊狀態的數量×90點傷害。",
				th: "แดเมจจะเท่ากับจำนวนสภาวะผิดปกติที่โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามได้รับอยู่ x90",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533292,
				tcgplayer: 568962,
			},
		},
	],

	evolveFrom: {
		ja: "ヤトウモリ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [758],
};

export default card;
