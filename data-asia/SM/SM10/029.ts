import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ベトベトン&アローラベトベトンGX",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バッドポイズン" },
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は8個になる。",
			},
		},
		{
			name: { ja: "どくしゃぶり" },
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがどくなら、このポケモンのHPを「100」回復する。",
			},
		},
		{
			name: { ja: "ベトベトミックスGX" },
			cost: [],
			effect: {
				ja: "相手のバトルポケモンをどくとマヒにする。追加でエネルギーが4個ついているなら、このどくでのせるダメカンの数は15個になる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557384,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [89, 89],

	suffix: "TAG TEAM-GX",
};

export default card;
