import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "シュバルゴ",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "チョボマキから 奪った 殻で 体を 覆い ガードしながら ２本の ヤリで 突いてくる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みきわめのやり" },
			damage: 80,
			cost: ["Metal"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっていないなら、このワザは失敗。",
			},
		},
		{
			name: { ja: "アイアンランス" },
			damage: 90,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557310,
			},
		},
	],

	evolveFrom: {
		ja: "カブルモ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [589],
};

export default card;
