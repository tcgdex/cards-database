import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "オノンド",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "折れた キバは 生え変わらないので 戦いが 終わると 河原の 岩で キバを 丹念に 磨く。",
	},

	stage: "Stage1",

	attacks: [
		{ name: { ja: "かみつく" }, damage: 30, cost: ["Colorless"] },
		{
			name: { ja: "そこぢから" },
			damage: 90,
			cost: ["Fighting", "Metal"],
			effect: { ja: "次の自分の番、このポケモンはワザが使えない。" },
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "キバゴ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [611],

	thirdParty: {
		cardmarket: 829410,
		tcgplayer: 636505,
	},
};

export default card;
