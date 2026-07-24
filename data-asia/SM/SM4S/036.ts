import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "シュバルゴ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "チョボマキから 奪った 殻で 体を 覆い ガードしながら ２本の ヤリで 突いてくる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みだれづき" },
			damage: "30×",
			cost: ["Metal"],
			effect: {
				ja: "コインを3回投げ、オモテの数x30ダメージ。",
			},
		},
		{
			name: { ja: "アイアンタックル" },
			damage: 130,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560348,
			},
		},
	],

	evolveFrom: {
		ja: "カブルモ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [589],
};

export default card;
