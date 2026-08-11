import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マシェード",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "点滅する 胞子の 光りで 獲物を おびき寄せて 眠らせる。 指先から 生気を 吸い取る。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "やすらぐひかり" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをねむりにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スパイラルラッシュ" },
			damage: "60+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863350,
			},
		},
	],

	evolveFrom: {
		ja: "ネマシュ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [756],
};

export default card;
