import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ナックラー",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	description: {
		ja: "アゴは 岩も 砕くが 重くて ひっくり 返ると 起きられない。 メグロコは その隙を 狙うのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "すづくり" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるスタジアムを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "すなしぶき" },
			damage: 10,
			cost: ["Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554869,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [328],
};

export default card;
