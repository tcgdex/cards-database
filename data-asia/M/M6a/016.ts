import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨワシ",
	},

	illustrator: "Narano",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "１匹では とても ひ弱なため 群れることで 敵に 立ち向かう 能力を 獲得した。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "むれのはんげき" },
			effect: {
				ja: "このポケモンがいるかぎり、自分のバトル場の「ヨワシ（『ポケモンex』をふくむ）」が、相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ふいをつく" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908194,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [746],
};

export default card;
