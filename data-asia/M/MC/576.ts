import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アオキのノコッチ",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "だれかに 姿を 見られると 尻尾で 穴を掘って 逃げだす。 羽で 少しだけ 浮かべる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきあげる" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863878,
			},
		},
	],

	retreat: 0,
	regulationMark: "J",
	rarity: "None",
	dexId: [206],
};

export default card;
