import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "バチンウニ",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "藻屑が 触っただけで 驚き 放電してしまうほど 臆病。 唇は 電気を 通さない。"
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

	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900108,
				tcgplayer: 709235,
				cardtrader: 403165,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [871],
};

export default card;
