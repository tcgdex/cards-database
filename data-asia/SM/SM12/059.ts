import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "フラベベ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 40,
	types: ["Fairy"],

	description: {
		ja: "花の 力が ないと 危険。 でも 好きな 色と 形が 見つかるまで 旅を 続けるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はなふぶき" },
			cost: ["Fairy"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554921,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [669],
};

export default card;
