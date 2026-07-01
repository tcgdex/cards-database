import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "チラーミィ",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "きれい好きな 性格の ポケモン。 尻尾を ほうきがわりに いつも 棲み処の ほこりを 払っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "とっしん",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [572],

	thirdParty: {
		cardmarket: 876969
	}
};

export default card;
