import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シンボラーGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ミラーカウンター" },
			effect: {
				'ja-jp': "このポケモンが、バトル場で相手の「ポケモンGX・EX」からワザのダメージを受けたとき、受けたダメージぶんのダメカンを、ワザを使ったポケモンにのせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ソニックウイング" },
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "インターセプトGX" },
			damage: "60×",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについているエネルギーの数x60ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558883,
			},
		},
	],

	retreat: 2,
	rarity: "Hyper rare",
	dexId: [561],

	suffix: "GX",
};

export default card;
