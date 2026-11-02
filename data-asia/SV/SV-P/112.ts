import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "タッツー",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "水中を 踊るように 泳いで 渦を つくる。 仲間と 渦の 大きさを 競って 遊ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかける" },
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 740413,
				tcgplayer: 587862,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [116],
};

export default card;
