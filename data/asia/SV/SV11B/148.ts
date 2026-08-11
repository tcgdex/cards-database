import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キリキザン",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'ja-jp': "コマタナの 群れを 率いている。 ボスの 座を 奪い合い 戦う。 敗れると 群れを 追い出される。",
	},

	stage: "Stage1",

	attacks: [
		{ name: { ja: "きる" }, damage: 40, cost: ["Metal"] },
		{
			name: { ja: "とどめをさす" },
			damage: "60+",
			cost: ["Metal", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンにダメカンがのっているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [{ type: "holo" }],

	evolveFrom: {
		'ja-jp': "コマタナ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [625],

	thirdParty: {
		cardmarket: 829407,
		tcgplayer: 636502,
	},
};

export default card;
