import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラダグトリオ",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "金属質の 髭は 重いので 素早さは いまいちだが 硬い 岩盤も 掘りぬくパワーを 持つ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ヘアーウォール" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の[鋼]ポケモン全員が、相手のポケモンから受けるワザのダメージは「-10」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 40,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544051,
			},
		},
	],

	evolveFrom: {
		ja: "アローラディグダ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [51],
};

export default card;
