import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "メガシャンデラex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 350,
	types: ["Psychic"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じゅばくのほのお" },
			effect: {
				ja: "このポケモンがいるかぎり、相手のバトルポケモンは、にげるためのエネルギーが1個ぶん多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ファントムメイズ" },
			damage: "130+",
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ランプラー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Ultra Rare",
	dexId: [609],

	suffix: "EX",

	thirdParty: {
		cardmarket: 888642,
	},
};

export default card;
