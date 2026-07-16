import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "バルビート",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "水の きれいな 池に 生息。 夜に なると お尻が 光り 点滅させて 仲間と 会話。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フェロモンキャッチ" },
			damage: "20+",
			cost: ["Grass"],
			effect: {
				ja: "前の自分の番、自分の「イルミーゼ」が「フェロモンサイン」を使っていたなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558972,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [313],
};

export default card;
