import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "シードラ",
		'zh-tw': "海刺龍",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "オスが 子どもを 育てる。 子育て中は 背中の トゲの 毒素が 強く 濃くなるのだ。",
		'zh-tw': "是由雄性來養育孩子。在育兒時，背上刺的 毒素會變得更強更濃。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "きままにおよぐ",
				'zh-tw': "隨興游水",
			},
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			},
		},
		{
			name: {
				ja: "ハイドロショット",
				'zh-tw': "水炮射",
			},
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン1匹に、このポケモンについている[W]エネルギーの数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到這隻寶可夢，身上附加的【水】能量的數量×20點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667898,
				tcgplayer: 569954,
			},
		},
	],

	evolveFrom: {
		ja: "タッツー",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [117],
};

export default card;
