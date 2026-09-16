import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲンガー",
	},

	illustrator: "Takashi Yamaguchi",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "カタストロフィー" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のポケモンがきぜつしたなら、そのポケモンをロストゾーンにおく。［ポケモン以外のカードはすべてトラッシュ。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "やみにぶちこむ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手の手札を見て、その中のポケモンを、このポケモンについている[P]エネルギーの数ぶんまで選び、ロストゾーンにおく。",
			},
		},
		{
			name: { ja: "のろいのしずく" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "ダメカン4個を、相手のポケモンに好きなようにのせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Colorless", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908328,
			},
		},
	],

	retreat: 0,
	rarity: "Classic Collection",
	dexId: [94],
};

export default card;
