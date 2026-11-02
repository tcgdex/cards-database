import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ウルガモス",
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "火山灰で 地上が 真っ暗に なったとき ウルガモスの 炎が 太陽の 代わりに なったという。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ねっぱりんぷん" },
			effect: {
				ja: "自分の番に、自分の手札から「基本[R]エネルギー」を1枚トラッシュするなら、1回使える。相手のバトルポケモンをやけどにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほのおのつばさ" },
			damage: 70,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863420,
			},
		},
	],

	evolveFrom: {
		ja: "メラルバ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [637],
};

export default card;
