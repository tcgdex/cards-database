import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ドデカバシ",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "体内の ガスを クチバシの 中で 爆発させ 木のタネを 発射。 大岩も 粉々にする パワー。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "エコーボイス" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンの「エコーボイス」のダメージは「+60」される。",
			},
		},
		{
			name: { ja: "くちばしキャノン" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561652,
			},
		},
	],

	evolveFrom: {
		ja: "ケララッパ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [733],
};

export default card;
