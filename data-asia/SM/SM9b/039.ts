import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "オニスズメ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "自分のテリトリーを 守るためなら 大きな ポケモンが 相手でも 向かっていく 向こう見ずな 性質。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かっくう" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "スピードひこう" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558157,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [21],
};

export default card;
