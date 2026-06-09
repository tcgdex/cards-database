import { Card } from "../../../interfaces";
import Set from "../SV11B";

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
				ja: "自分の番に、自分の手札から「基本エネルギー」を1枚トラッシュするなら、1回使える。相手のバトルポケモンをやけどにする。",
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
		{ type: "holo" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		ja: "メラルバ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [637],

	thirdParty: {
		cardmarket: 828465,
		tcgplayer: 636373,
	},
};

export default card;
