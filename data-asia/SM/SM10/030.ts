import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴース",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "墓場で 発生する ガスに 怨念が 宿るうち やがて ポケモンに なったと いわれている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふえるうらみ" },
			effect: {
				ja: "このポケモンがきぜつしたとき、自分の山札にある「ゴースト」を2枚まで、ベンチに出す。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "おにび" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557385,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [92],
};

export default card;
