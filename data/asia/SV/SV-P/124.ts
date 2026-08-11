import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カラミンゴex",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ジャストビーク" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンと相手のバトルポケモンについているエネルギーの数が同じなら、100ダメージ追加。",
			},
		},
		{
			name: { ja: "ブレイブバード" },
			damage: 200,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 751822,
				tcgplayer: 587874,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [973],

	suffix: "EX",
};

export default card;
