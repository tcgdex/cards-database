import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "マーシャドー",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "相手の 影に 潜って 動きや 力を 真似る。 真似ているうちに 本物 よりも 強くなるぞ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "リセットホール" },
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に1回使える。場に出ているスタジアムをトラッシュする。その後、このポケモンと、ついているすべてのカードを、トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "レッドナックル" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ウルトラビースト」なら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543861,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [802],
};

export default card;
