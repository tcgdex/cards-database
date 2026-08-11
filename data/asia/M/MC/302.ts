import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リキキリン",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'ja-jp': "硬い テールヘッドで 本体の 頭を 守りつつ 長い 首を 振りまわして 頭突きを 食らわせる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ミッドランブル" },
			damage: "40×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の場の1進化ポケモンの数×40ダメージ。",
			},
		},
		{
			name: { ja: "ぶきみなねんぱ" },
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863604,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "キリンリキ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [981],
};

export default card;
