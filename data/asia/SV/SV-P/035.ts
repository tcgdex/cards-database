import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "パモ",
		'zh-tw': "獒教父ex",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		ja: "頬の 電気袋は 未発達。 前脚の 肉球で 懸命に 擦ると ようやく 発電できる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "バチッとビンタ",
				'zh-tw': "膽怯",
			},
			damage: 20,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-50」點。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587792,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [921],
};

export default card;
