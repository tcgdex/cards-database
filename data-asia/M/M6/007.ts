import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ビークイン",
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "体の 穴の 中で 子どもを 育てる。 ミツハニーを 操る フェロモンを 分泌する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "つきさす" },
			damage: 40,
			cost: ["Grass"],
		},
		{
			name: { ja: "クリーンヒット" },
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899797,
				tcgplayer: 709163,
			},
		},
	],

	evolveFrom: {
		ja: "ミツハニー",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [416],
};

export default card;
