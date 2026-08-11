import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "バチンキー",
		'zh-tw': "啪咚猴",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "激しい ビートを 刻むことに 夢中になる あまり 戦いで 相手が 気絶しても 気づかない。",
		'zh-tw': "打著激烈的節拍戰鬥時，由於過於忘我，甚至不會意識到自己已經把對手打昏了。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "はたきおとす",
				'zh-tw': "拍落",
			},
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
				'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560730,
				tcgplayer: 569235,
			},
		},
	],

	evolveFrom: {
		ja: "サルノリ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [811],
};

export default card;
