import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "クレセリア",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "クレセリアの 羽を 持って 寝ると 楽しい 夢が 見られると いう。 三日月の化身と 呼ばれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みかづきがえし" },
			cost: ["Psychic"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。その後、おたがいのバトルポケモンにのっているダメカンを、すべてのせ替える。",
			},
		},
		{
			name: { ja: "サイコキネシス" },
			damage: "60+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559844,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [488],
};

export default card;
