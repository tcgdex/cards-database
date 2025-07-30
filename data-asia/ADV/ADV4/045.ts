import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "クレイドル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [344],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "プライマルプル",
			},
			effect: {
				ja: "Claydolがあなたのアクティブなポカモンである限り、各プレイヤーの進化したPokã©Monは、攻撃を使用するために無色のより多くのエネルギーを支払います。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "泥の目",
			},
			effect: {
				ja: "クレイドールと防御ポケモンに接続された基本エネルギーカードの数を10回ダメージします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};
