import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴチルゼル",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "強力な サイコパワーの 影響で ゴチルゼルの 周囲の 空間が ねじれ 何万光年も 遠くの 星空が 映る。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "トラクタービーム" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに30ダメージ。",
			},
		},
		{
			name: { ja: "リンクブラスト" },
			damage: "50+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "このポケモンと相手のバトルポケモンについているエネルギーの数が同じなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561493,
			},
		},
	],

	evolveFrom: {
		ja: "ゴチミル",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [576],
};

export default card;
