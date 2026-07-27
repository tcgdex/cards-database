import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "カクレオン",
	},

	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "身体の 色を 変えて 景色に 溶け込む。 長く かまわないでいると スネて 姿を 見せなくなる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かくれじょうず" },
			effect: {
				ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ベロウィップ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793582,
				tcgplayer: 587693,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [352],
};

export default card;
