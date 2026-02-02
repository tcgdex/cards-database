import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "モンメン",
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "襲われると 体から 綿を 飛ばす。 敵が 綿を モンメンと 間違えている すきに 逃げるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "すいとる" },
			damage: 10,
			cost: ["Grass"],
			effect: { ja: "このポケモンのHPを「10」回復する。" },
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [546],
	thirdParty: {
		cardmarket: 829444,
		tcgplayer: 636643,
	},
};

export default card;
