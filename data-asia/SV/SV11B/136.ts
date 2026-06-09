import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "イワパレス",
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "縄張りを 取り合って イワパレス 同士が 激しく 戦う。 岩を 壊された ほうが 負け。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "がんじょう" },
			effect: {
				ja: "このポケモンのHPがまんたんの状態で、このポケモンがワザのダメージを受けてきぜつするとき、きぜつせず、残りHPが「10」の状態で場に残る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ストーンエッジ" },
			damage: "80+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: { ja: "コインを1回投げオモテなら、60ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "イシズマイ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [558],

	thirdParty: {
		cardmarket: 829382,
		tcgplayer: 636490,
	},
};

export default card;
