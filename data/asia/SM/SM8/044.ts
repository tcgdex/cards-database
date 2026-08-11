import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ソーナンス",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "真っ黒な 尻尾を 隠すため 暗闇で ひっそりと 生きている。 自分からは 攻撃しない。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シェードテール" },
			effect: {
				ja: "このポケモンがベンチにいるかぎり、おたがいの場の♢（プリズムスター）のポケモンは、ワザが使えず、特性もすべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はねとばす" },
			damage: "30+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558683,
			},
		},
	],

	retreat: 2,
	rarity: "Uncommon",
	dexId: [202],
};

export default card;
