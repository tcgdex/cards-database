import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ガチグマ",
		'zh-tw': "月月熊",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	description: {
		ja: "ヒスイの地に 敷かれし 湿地の土こそ 頑丈なる体躯と 泥炭を 自在に 扱う 新たな 器量 もたらしたと 考察す。",
		'zh-tw': "考察結果顯示，正是遍布在洗翠大地上的濕地土壤，造就了牠堅實 的軀體和自在運用泥炭的新能力。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ピートハント",
				'zh-tw': "泥炭搜尋",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから好きなカードを2枚まで選び、相手に見せて、手札に加える。",
				'zh-tw': "從自己的棄牌區任意選擇最多2張卡，在給對手看過後加入手牌。",
			},
		},
		{
			name: {
				ja: "きょたいでつっこむ",
				'zh-tw': "巨體碰撞",
			},
			damage: 200,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651116,
				tcgplayer: 569900,
			},
		},
	],

	evolveFrom: {
		ja: "リングマ",
	},

	retreat: 4,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [901],
};

export default card;
