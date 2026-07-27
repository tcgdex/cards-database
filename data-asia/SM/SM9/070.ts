import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ピジョット",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "エサを 探すとき 水面 すれすれを 滑るように 飛んで コイキングなどを わしづかみにする。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ふきとばし" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "せんぷう" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンと、ついているすべてのカードを、相手の手札にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558423,
			},
		},
	],

	evolveFrom: {
		ja: "ピジョン",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [18],
};

export default card;
