import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "サルノリ",
		'zh-tw': "敲音猴",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "スティックの 連打で 攻撃。 すごい スピードで 叩くうちに どんどん テンションが 上がるのだ。",
		'zh-tw': "會用木棒連續擊打來攻擊。在以飛快的速度擊打的同時，情緒也會變得越來越高漲。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "にどたたき",
				'zh-tw': "二連敲",
			},
			damage: "30×",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×30ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560727,
				tcgplayer: 569234,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [810],
};

export default card;
