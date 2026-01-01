import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ホイーガ",
	},

	illustrator: "okayamatakatoshi",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "硬い 殻に 守られている。 タイヤのように 回転して 敵に 激しく 体当たりする。",
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "フシデ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [544],
};

export default card;
