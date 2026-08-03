import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ナゲツケサル",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "２０匹ほどの グループで 暮らす。 決まった 役割を こなすことで 厳しい 自然を 生き抜いてきた。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スローイングコーチ" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の「れんげき」のポケモンが使うワザの、相手のベンチの「ポケモンV・GX」へのダメージは「+30」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "なげつける" },
			cost: ["Fighting"],
			effect: {
				ja: "相手のポケモン1匹に、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586941,
				tcgplayer: 571455,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [766],
};

export default card;
