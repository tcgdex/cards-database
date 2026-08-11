import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ イシツブテ",
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "地面で 寝ている イシツブテを 踏むと バチンと 音が して ビリッと 全身が しびれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "げんこつ" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "プチでんき" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863524,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [74],
};

export default card;
