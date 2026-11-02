import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "レパルダス",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "美しい スタイルは 全身の 発達した 筋肉の おかげ。 音もたてずに 夜を 駆けぬける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 40,
			cost: ["Darkness"],
		},
		{
			name: { ja: "シャドーネイル" },
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557020,
			},
		},
	],

	evolveFrom: {
		ja: "チョロネコ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [510],
};

export default card;
