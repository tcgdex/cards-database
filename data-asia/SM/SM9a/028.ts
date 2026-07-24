import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲッコウガ",
	},

	illustrator: "Yusuke Ohmura",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "水を 圧縮して 手裏剣を 作り出す。 高速回転させて 飛ばすと 金属も 真っ二つ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "しとめる" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモン以外の、おたがいの場のポケモン全員の中から、残りHPが一番少ないポケモンのうち1匹を選び、きぜつさせる。",
			},
		},
		{
			name: { ja: "かすみぎり" },
			damage: 70,
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558215,
			},
		},
	],

	evolveFrom: {
		ja: "ゲコガシラ",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [658],
};

export default card;
