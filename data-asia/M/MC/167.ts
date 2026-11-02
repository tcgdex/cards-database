import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アリゲイツ",
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "キバは 抜けても 次から 次に 生えてくる。 いつも 口の中には ４８本の キバが そろっている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 50,
			cost: ["Water", "Water"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863463,
			},
		},
	],

	evolveFrom: {
		ja: "ワニノコ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [159],
};

export default card;
