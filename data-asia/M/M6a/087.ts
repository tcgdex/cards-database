import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "サーフゴー",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "コインが 積みあがって 作られた 体は 頑丈。 コインを 連射して 敵を 圧倒する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "セレブレイト" },
			cost: ["Metal"],
			effect: {
				ja: "自分の手札が30枚なら、自分のサイドを2枚とる。その後、自分の手札をすべて山札にもどして切る。",
			},
		},
		{
			name: { ja: "トリプルスマッシュ" },
			damage: "50×",
			cost: ["Metal"],
			effect: {
				ja: "コインを3回投げ、オモテの数×50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908265,
			},
		},
	],

	evolveFrom: {
		ja: "コレクレー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [1000],
};

export default card;
