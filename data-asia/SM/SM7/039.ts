import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーピッグ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "黒真珠で サイコパワーを 増幅させる。 不思議な ステップで 相手の 心を 操る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ミラーステップ" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "相手の場に、自分の場のポケモンと同じ名前のポケモンがいるなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559000,
			},
		},
	],

	evolveFrom: {
		ja: "バネブー",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [326],
};

export default card;
