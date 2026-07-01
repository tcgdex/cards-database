import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "バケッチャ",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "体の 大きさだけでなく 連れ去る 魂の サイズも 違う 別の 品種と 最近 判明した。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ふむ",
			},
			damage: 20,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	variants: [{ type: "normal" }],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [710],

	thirdParty: {
		cardmarket: 876939
	}
};

export default card;
