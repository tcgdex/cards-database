import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "エアームド",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "成長の度 抜け落ちる 羽は 薄く 鋭い。 昔の 戦士は 刀 として 利用した。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "メタルサウンド" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "おたがいの場のポケモンについている特殊エネルギーを、すべてトラッシュする。",
			},
		},
		{
			name: { ja: "つばめがえし" },
			damage: "60+",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561716,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [227],
};

export default card;
