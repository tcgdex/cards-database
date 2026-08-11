import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "フラベベ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 30,
	types: ["Fairy"],

	description: {
		ja: "花の 力が ないと 危険。 でも 好きな 色と 形が 見つかるまで 旅を 続けるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はなのさそい" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[妖]ポケモンを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554918,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [669],
};

export default card;
