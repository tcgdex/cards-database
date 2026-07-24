import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "オコリザル",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "あまりに 怒りすぎて そのまま 死んでしまうことが あるほどだが その死に顔は とても 安らか。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "けたぐり" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ケンカファイト" },
			damage: 90,
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「+30」される。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560270,
			},
		},
	],

	evolveFrom: {
		ja: "マンキー",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [57],
};

export default card;
