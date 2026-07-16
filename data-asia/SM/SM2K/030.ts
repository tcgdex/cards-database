import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "カイリキー",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "メガトン級の パンチを 放ち 立ちふさがる 敵を 地平線の 彼方まで ぶっ飛ばすのだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "おれいまいり" },
			damage: "20+",
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "前の相手の番に、相手がとったサイドの枚数x80ダメージ追加。",
			},
		},
		{
			name: { ja: "じごくぐるま" },
			damage: 150,
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561496,
			},
		},
	],

	evolveFrom: {
		ja: "ゴーリキー",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [68],
};

export default card;
