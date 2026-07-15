import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマ団のヤジロン",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "敵を 見つけたら 一斉に 鳴き声を あげて 知らせて くれるんだ。 助かるぜ！",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "テレキネシス" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のポケモンを1匹選び、20ダメージ。このワザのダメージは弱点・抵抗力の計算をしない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563730,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [343],
};

export default card;
