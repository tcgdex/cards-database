import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "カゲボウズ",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "頭の ツノで 恨みや ねたみの 感情を 食べると いわれる。 真夜中 活発に 活動する。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ばけがくれ" },
			effect: {
				ja: "このポケモンは、相手のワザや特性の効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶらさがる" },
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [353],

	thirdParty: {
		cardmarket: 888274,
	},
};

export default card;
