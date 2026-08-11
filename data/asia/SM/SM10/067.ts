import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャース",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "ゴミ捨て場に いくと ひかりものを 巡って ヤミカラスと 激しく ケンカする 光景が 見られる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねこびより" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。その後、このポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "しっぽではたく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557425,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [52],
};

export default card;
