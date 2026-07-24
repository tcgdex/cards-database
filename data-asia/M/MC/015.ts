import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ストライク",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "両手の 鋭い カマは 硬いものを 切れば切るほど さらに 切れ味を 増していく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きる" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "スラッシュダウン" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「スラッシュダウン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863302,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [123],
};

export default card;
