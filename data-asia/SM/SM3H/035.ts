import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "マーイーカ",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "発光体の 点滅を 見つめた 相手は 目が くらみ 戦う 気持ちが なくなってしまうのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "からみつく" },
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561099,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [686],
};

export default card;
