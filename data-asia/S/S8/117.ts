import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "パルスワンVMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "ライトニングストーム" },
			damage: "30+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[雷]エネルギーの数×30ダメージ追加。",
			},
		},
		{
			name: { ja: "ダイボルト" },
			damage: 230,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「ダイボルト」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576195,
				tcgplayer: 569618,
			},
		},
	],

	evolveFrom: {
		ja: "パルスワンV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [836],
};

export default card;
