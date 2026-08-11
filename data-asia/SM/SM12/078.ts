import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "リングマ",
	},

	illustrator: "Hiroki Asanuma",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "どんな においも かぎわける。 地面深くに 埋まっている 食べ物も 残らず 見つけ出す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ヘビーホールド" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554984,
			},
		},
	],

	evolveFrom: {
		ja: "ヒメグマ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [217],
};

export default card;
