import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "クマシュン",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "具合が 悪くなると 鼻水が 水っぽくなり こおり技の 威力が 落ちてしまうのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はなみずまみれ" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [613],
};

export default card;
