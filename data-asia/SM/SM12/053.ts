import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "クチート",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "ずる賢く 恐ろしい ポケモン。 キュートな 仕草で 油断させ いきなり おおアゴで 丸呑みにする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふたつのよびごえ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある「TAG TEAM」のカードを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "くらいつく" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554907,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [303],
};

export default card;
