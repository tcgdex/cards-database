import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ベロベルト",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "だえきには どんな 物も 溶かす 成分が たっぷり 含まれており なめられると いつまでも しびれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "なめごろし" },
			damage: "50+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x50ダメージ追加。最初のコインがウラなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ころがりタックル" },
			damage: 110,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560001,
			},
		},
	],

	evolveFrom: {
		ja: "ベロリンガ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [463],
};

export default card;
