import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアス",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 160,
	types: ["Fairy"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "せいめいのみち" },
			effect: {
				ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の場のポケモンについているエネルギーを好きなだけ、このポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブライトホーン" },
			damage: 160,
			cost: ["Fairy", "Fairy", "Fairy"],
			effect: {
				ja: "次の自分の番、このポケモンは「ブライトホーン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558858,
			},
		},
	],

	retreat: 2,
	rarity: "Rare Holo",
	dexId: [716],
};

export default card;
