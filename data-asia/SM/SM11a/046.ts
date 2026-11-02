import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "アクジキング",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	description: {
		ja: "この世界では 異質で 危険だが 本来 棲んでいる 世界では 普通に 見かける 生物らしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やまかじり" },
			cost: ["Darkness"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
		{
			name: { ja: "レッドバイキング" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、サイドを1枚多くとる。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556699,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [799],
};

export default card;
