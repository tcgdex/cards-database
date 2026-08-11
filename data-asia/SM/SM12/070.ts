import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャランゴ",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		ja: "ウロコを 叩き合わせて 音を 鳴らす。 リズムが 最高潮に 達したところで 襲いかかる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "せんしのほうこう" },
			effect: {
				ja: "このポケモンは、相手のバトル場に「ポケモンGX・EX」がいるなら、出したばかりでも進化できる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "リューノスライス" },
			damage: 30,
			cost: ["Lightning", "Fighting"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554956,
			},
		},
	],

	evolveFrom: {
		ja: "ジャラコ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [783],
};

export default card;
