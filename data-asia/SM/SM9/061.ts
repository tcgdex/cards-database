import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラナッシー",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		ja: "ナッシーは アローラ人の 誇り。 歴史的な 絵画や 建物に その 姿が 刻まれている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "パラダイスドロー" },
			cost: [],
			effect: {
				ja: "自分の手札が6枚になるように、山札を引く。のぞむなら、山札を引く前に、自分の手札を好きなだけトラッシュする。",
			},
		},
		{
			name: { ja: "たまおとし" },
			damage: "60×",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "自分の手札にある「タマタマ」を好きなだけトラッシュし、その枚数x60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558387,
			},
		},
	],

	evolveFrom: {
		ja: "タマタマ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [103],
};

export default card;
