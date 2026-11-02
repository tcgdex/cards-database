import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ イダイトウ",
		'zh-tw': "洗翠 幽尾玄魚",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "遡上の旅路にて 志半ばに 散った 輩の魂を まとう。 ヒスイ 流れし 河川においては 敵うもの 皆無なり。",
		'zh-tw': "在溯河而上的旅程中半途喪命者的靈魂纏繞其身。在流經洗翠地區 的河川裡可謂所向無敵。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "みたまのぼり",
				'zh-tw': "攀聖靈",
			},
			damage: "20×",
			cost: [],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーをすべて相手に見せ、その枚数×20ダメージ。その後、見せたエネルギーを山札にもどして切る。",
				'zh-tw': "在給對手看過自己的棄牌區的所有基本能量卡後，造成其張數×20點傷害。然後，將給對手看過的能量卡放回牌庫並重洗。",
			},
		},
		{
			name: {
				ja: "ウォーターショット",
				'zh-tw': "水射擊",
			},
			damage: 70,
			cost: ["Water"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656251,
				tcgplayer: 570676,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ バスラオ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [902],
};

export default card;
