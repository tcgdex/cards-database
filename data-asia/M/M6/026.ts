import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "バチンウニ",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "藻屑が 触っただけで 驚き 放電してしまうほど 臆病。 唇は 電気を 通さない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エナジークラッシュ" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン全員についているエネルギーの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899929,
				tcgplayer: 709180,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [871],
};

export default card;
