import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリテヤマ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "怪力で 知られるが 年老いると 戦うことを やめ マクノシタに 稽古を つけるように なるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おしだし" },
			damage: 60,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "メガトンはりて" },
			damage: 130,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561707,
			},
		},
	],

	evolveFrom: {
		ja: "マクノシタ",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [297],
};

export default card;
