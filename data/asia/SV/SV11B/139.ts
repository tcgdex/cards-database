import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホイーガ",
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'ja-jp': "硬い 殻に 守られている。 タイヤのように 回転して 敵に 激しく 体当たりする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ベノムショック" },
			damage: "30+",
			cost: ["Colorless"],
			effect: { ja: "相手のバトルポケモンがどくなら、60ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		'ja-jp': "フシデ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [544],

	thirdParty: {
		cardmarket: 829385,
		tcgplayer: 636493,
	},
};

export default card;
