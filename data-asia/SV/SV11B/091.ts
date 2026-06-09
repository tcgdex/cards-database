import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "チュリネ",
	},

	illustrator: "Tika Matsuno",
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
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [548],

	thirdParty: {
		cardmarket: 829332,
		tcgplayer: 636445,
	},
};

export default card;
