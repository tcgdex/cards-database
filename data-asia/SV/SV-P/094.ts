import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ブロロローム",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "毒素と 岩の 成分を 混ぜた ガスを ８つに 増えた シリンダーで 爆発させ エネルギーを 作る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いばる" },
			cost: ["Metal"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
		{
			name: { ja: "ヒュージタックル" },
			damage: "70+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の手札の枚数が、相手の手札の枚数より多いなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723908,
				tcgplayer: 587852,
			},
		},
	],

	evolveFrom: {
		ja: "ブロロン",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [966],
};

export default card;
