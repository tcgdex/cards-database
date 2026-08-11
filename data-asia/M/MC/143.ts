import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アチゲータ",
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "声帯と 炎袋の 弁は 密接な 関係。 だみ声を 上げながら 炎を 吐き散らす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ヒートブレス" },
			damage: "30+",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863439,
			},
		},
	],

	evolveFrom: {
		ja: "ホゲータ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [910],
};

export default card;
