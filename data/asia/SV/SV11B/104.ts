import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウルガモス",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'ja-jp': "火山灰で 地上が 真っ暗に なったとき ウルガモスの 炎が 太陽の 代わりに なったという。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ねっぱりんぷん" },
			effect: {
				'ja-jp': "自分の番に、自分の手札から「基本エネルギー」を1枚トラッシュするなら、1回使える。相手のバトルポケモンをやけどにする。",
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

	variants: [{ type: "holo" }],

	evolveFrom: {
		'ja-jp': "メラルバ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [637],

	thirdParty: {
		cardmarket: 829347,
		tcgplayer: 636458,
	},
};

export default card;
