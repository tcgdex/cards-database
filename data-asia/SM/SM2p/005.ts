import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "レディアン",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "星明りが エネルギーと いわれるが 普通に 木の実も 大好物。 昼間は 草に 包まって 寝てる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スピードスター" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "れんぞくパンチ" },
			damage: "40×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを4回投げ、オモテの数x40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561208,
			},
		},
	],

	evolveFrom: {
		ja: "レディバ",
	},

	retreat: 1,
	rarity: "None",
	dexId: [166],
};

export default card;
