import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "オニシズクモ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "見かけに よらず 面倒見が いい。 弱く 小さな 仲間を 見つけると 水泡の 中に 入れて 守る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あわ" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "バブルトラップ" },
			damage: "40+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "前の自分の番、自分のポケモンが「あわ」を使っていたなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559762,
			},
		},
	],

	evolveFrom: {
		ja: "シズクモ",
	},

	retreat: 1,
	rarity: "None",
	dexId: [752],
};

export default card;
