import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ガルーラ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "ガルーラの 母親の 愛情は 深い。 我が子を 守るためならば 死さえ 恐れないと いわれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふりおろす" },
			damage: "30+",
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、30ダメージ追加。",
			},
		},
		{
			name: { ja: "ハリケーンパンチ" },
			damage: "50×",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを4回投げ、オモテの数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560115,
			},
		},
	],

	retreat: 3,
	rarity: "None",
	dexId: [115],
};

export default card;
