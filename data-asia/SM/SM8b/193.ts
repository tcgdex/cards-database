import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "カミツルギ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "巨大な 鉄塔を 一刀の もとに 切り捨てる 姿が 目撃された ビーストの 一種。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "カミカゼ" },
			damage: "40+",
			cost: ["Metal", "Metal"],
			effect: {
				ja: "相手のサイドの残り枚数が6枚なら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551461,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [798],
};

export default card;
