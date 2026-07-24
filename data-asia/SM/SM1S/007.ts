import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "アママイコ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "身を 守るため ヘタが 発達。 かなりの 硬さで とりポケモンに 突かれても 全然 平気だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あまいかおり" },
			cost: ["Grass"],
			effect: {
				ja: "自分のポケモン1匹のHPを「30」回復する。",
			},
		},
		{
			name: { ja: "ふみつけ" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561681,
			},
		},
	],

	evolveFrom: {
		ja: "アマカジ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [762],
};

export default card;
