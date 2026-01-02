import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "チュリネ",
	},

	illustrator: "mele",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "頭の 葉っぱを かじると とても 苦いが 疲れた 体を 元気にする 効果が あるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かくれる" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{ name: { ja: "このは" }, damage: 10, cost: ["Grass"] },
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [548],
};

export default card;
