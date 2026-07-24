import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マリィのズルッグ",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "だるんと のびた 皮を 首まで 引っ張りあげて ガード。 皮が のびている 個体ほど 偉いらしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 50,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863765,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [559],
};

export default card;
