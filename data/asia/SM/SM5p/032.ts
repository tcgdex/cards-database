import { Card } from "models/database/card";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドクロッグ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'ja-jp': "こぶしの トゲからは かすり傷でも 命を 落とすほどの 猛毒を 分泌する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どくづき" },
			damage: 30,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "むねんをはらす" },
			damage: "50+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "前の相手の番に、ワザのダメージで、自分の[超]ポケモンがきぜつしていたなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559782,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "グレッグル",
	},

	retreat: 2,
	rarity: "None",
	dexId: [454],
};

export default card;
