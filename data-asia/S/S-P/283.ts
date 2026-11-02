import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "コマタナ",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "鋭い 刃を 操り 敵を 追い詰める。 河原の 石で 体の 刃を 手入れする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 30,
			cost: ["Metal"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650955,
				tcgplayer: 597456,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [624],
};

export default card;
