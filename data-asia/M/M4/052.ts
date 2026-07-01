import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "スカンプー",
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "お尻から 飛ばす 液体の 臭いは ２キロも 離れた 人が 具合を 悪くするほど くさい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっかく",
			},
			damage: 20,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [434],

	thirdParty: {
		cardmarket: 876951
	}
};

export default card;
