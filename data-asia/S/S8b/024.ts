import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "タッツー",
		'zh-tw': "墨海馬",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "サンゴの 陰に 住処を 作る。 危険を 感じると 口から 真っ黒い 墨を 吐いて 逃げる。",
		'zh-tw': "會在珊瑚的陰影處安家。如果感到危險，就會從口中吐出漆黑的墨汁逃跑。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "えんまく",
				'zh-tw': "煙幕",
			},
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
				'zh-tw': "在下個對手的回合，當受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586539,
				tcgplayer: 571277,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578365,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [116],
};

export default card;
