import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "サーフゴー",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "コインが 積みあがって 作られた 体は 頑丈。 コインを 連射して 敵を 圧倒する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "リッチストライク" },
			damage: "30+",
			cost: ["Metal"],
			effect: {
				ja: "この番、このポケモンが「コレクレー」から進化していたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "サーフリターン" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863836,
			},
		},
	],

	evolveFrom: {
		ja: "コレクレー",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [1000],
};

export default card;
