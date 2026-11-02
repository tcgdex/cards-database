import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン",
	},

	illustrator: "Katsunori Sato",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "雨雲を 呼べる ポケモンとして 大昔から 祀られていた。 ときどき 地面に 埋められている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しんかジャマー" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、相手は手札からポケモンを出して進化させられない。",
			},
		},
		{
			name: { ja: "ちょうねんりき" },
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752794,
				tcgplayer: 568363,
			},
		},
	],

	evolveFrom: {
		ja: "ドーミラー",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [437],
};

export default card;
