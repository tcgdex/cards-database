import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "トロッゴン",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "感情が 昂ると 体内の 温度が 上昇。 炎を 吹きながら 忙しなく 走る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はねとばす" },
			damage: "20+",
			cost: ["Fighting"],
			effect: {
				ja: "コインを1回投げオモテなら、40ダメージ追加。",
			},
		},
		{
			name: { ja: "ロックスマッシュ" },
			damage: 80,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863712,
			},
		},
	],

	evolveFrom: {
		ja: "タンドン",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [838],
};

export default card;
