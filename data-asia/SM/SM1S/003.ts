import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "バタフリー",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "大きな 眼を よく 観察すると 実は 小さな 眼が 無数に 集まって できているのが わかる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ねんりき" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ふきとばし" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561677,
			},
		},
	],

	evolveFrom: {
		ja: "トランセル",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [12],
};

export default card;
