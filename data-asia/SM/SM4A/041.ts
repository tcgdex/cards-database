import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ミルタンク",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "そのミルクは 栄養満点で 高カロリー。 ゆえに 飲みすぎると ミルタンクみたいな 体型に なる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "モーモーエール" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、手札から自分のポケモンにエネルギーをつけるたび、そのポケモンのHPを「90」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒップドロップ" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560287,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [241],
};

export default card;
