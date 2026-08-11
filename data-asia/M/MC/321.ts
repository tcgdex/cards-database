import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "デスカーン",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "ピカピカの 黄金の 体。 もはや 人間だった ことは 思い出すことは ないと いう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "めいふのおきて" },
			cost: ["Psychic"],
			effect: {
				ja: "おたがいの特性を持つポケモン全員に、それぞれダメカンを6個のせる。",
			},
		},
		{
			name: { ja: "ホロウショット" },
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863623,
			},
		},
	],

	evolveFrom: {
		ja: "デスマス",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [563],
};

export default card;
