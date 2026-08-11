import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ドレディア",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "どんなに 手間と お金を かけても 人の 手で 咲かせるよりも 野生で 咲く 花の ほうが 美しい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はなふぶき" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "はなびらのまい" },
			damage: "40×",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数x40ダメージ。このポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561471,
			},
		},
	],

	evolveFrom: {
		ja: "チュリネ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [549],
};

export default card;
