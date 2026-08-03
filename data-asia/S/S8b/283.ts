import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "れんげきウーラオスVMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "しっぷうづき" },
			damage: "30+",
			cost: ["Fighting"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、120ダメージ追加。",
			},
		},
		{
			name: { ja: "キョダイレンゲキ" },
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン2匹に、それぞれ120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587080,
				tcgplayer: 571534,
			},
		},
	],

	evolveFrom: {
		ja: "れんげきウーラオスV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Secret Rare",
	dexId: [892],
};

export default card;
