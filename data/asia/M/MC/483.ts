import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ペパーのオラチフ",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "相手に 嘗められないように いつも しかめっ面をしているが 泣いている 子どもは その顔で 笑いだす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふむ" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "がちんこ" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863785,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [942],
};

export default card;
