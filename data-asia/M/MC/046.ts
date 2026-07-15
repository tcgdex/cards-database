import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "イワパレス",
	},

	illustrator: "Po-Suzuki",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "太い ツメが 最大の 武器。 ドサイドンの プロテクターにさえ ひびを 入れるほど 硬いぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しんぴのいしやど" },
			effect: {
				ja: "このポケモンは、相手の「ポケモンex」からワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "グレートシザー" },
			damage: 120,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863337,
			},
		},
	],

	evolveFrom: {
		ja: "イシズマイ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [558],
};

export default card;
