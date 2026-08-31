import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ミツハニー",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "生まれたときから ３匹 一緒。 ビークインに 喜んでもらうため いつも 花の蜜を 集めている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぱっときえる" },
			damage: 10,
			cost: ["Grass"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、手札にもどす。",
			},
		},
		{
			name: { ja: "バグパニック" },
			damage: "50×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を下から7枚オモテにして、その中にある、ワザ「バグパニック」を持つポケモンの枚数×50ダメージ。オモテにしたポケモンは山札にもどして切る。残りのカードはトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899796,
				tcgplayer: 709162,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [415],
};

export default card;
