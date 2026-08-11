import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ザマゼンタV",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふくつのたて" },
			effect: {
				ja: "このポケモンは、相手の「ポケモンVMAX」からワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アサルトタックル" },
			damage: 130,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587049,
				tcgplayer: 571503,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Character Super Rare",
	dexId: [889],
};

export default card;
