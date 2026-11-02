import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "タイプ：ヌル",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "重い 制御マスクを つけており 本来の 能力を だせない。 特別な 力を 秘めている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アーマープレス" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "スラッシュクロー" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551521,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [772],
};

export default card;
