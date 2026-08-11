import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ラビフット",
		'zh-tw': "騰蹴小將",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "手を 使わずに 木の 枝から 木の実を 摘み取り リフティング。 足技を 磨く 練習。",
		'zh-tw': "會用腳把樹果從樹木上踢落，用來練習挑球，藉此鍛鍊自己的腳法。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ボレーキック",
				'zh-tw': "同步光炮",
			},
			damage: 60,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "若自己的手牌的張數與對手的手牌的張數相同，則增加80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560432,
				tcgplayer: 569148,
			},
		},
	],

	evolveFrom: {
		ja: "ヒバニー",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [814],
};

export default card;
