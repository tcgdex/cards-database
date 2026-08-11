import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バタフリー",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "大きな 眼を よく 観察すると 実は 小さな 眼が 無数に 集まって できているのが わかる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "バイバイヒーリング" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "自分のポケモン全員のHPを、すべて回復する。このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
		{
			name: { ja: "しびれごな" },
			damage: 60,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561003,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "トランセル",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [12],
};

export default card;
