import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "サザンドラ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		ja: "両腕の 頭は 脳みそを 持たない。 ３つの 頭で すべてを 食べつくし 破壊してしまう。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふるいおとす" },
			effect: {
				ja: "自分の番に1回使える。自分のベンチポケモンを3匹選ぶ。その後、選んでいない自分のベンチポケモン全員と、ついているすべてのカードを、トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダークデストロイ" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを、1個トラッシュする。その場合、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560278,
			},
		},
	],

	evolveFrom: {
		ja: "ジヘッド",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [635],
};

export default card;
