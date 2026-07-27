import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ドクロッグ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "こぶしの トゲからは かすり傷でも 命を 落とすほどの 猛毒を 分泌する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どくづき" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "むねんをはらす" },
			damage: "50+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分の[闘]ポケモンがきぜつしていたなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559842,
			},
		},
	],

	evolveFrom: {
		ja: "グレッグル",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [454],
};

export default card;
