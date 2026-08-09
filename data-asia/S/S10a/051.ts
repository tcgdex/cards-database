import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー",
		'zh-tw': "銅鏡怪",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "古い 遺跡に 現れる。 体の 模様は ガラルには ない 文化の もので 謎。",
		'zh-tw': "會在古老的遺跡出現。身上的紋路不屬於伽勒爾文化， 因此至今仍然謎團重重。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かいてんアタック",
				'zh-tw': "迴轉攻擊",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656374,
				tcgplayer: 570714,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577125,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [436],
};

export default card;
