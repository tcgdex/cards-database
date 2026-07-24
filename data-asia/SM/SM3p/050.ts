import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "レパルダス",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "美しい スタイルは 全身の 発達した 筋肉の おかげ。 音もたてずに 夜を 駆けぬける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いちゃもん" },
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザを使えない。",
			},
		},
		{
			name: { ja: "きりさく" },
			damage: 60,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560208,
			},
		},
	],

	evolveFrom: {
		ja: "チョロネコ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [510],
};

export default card;
