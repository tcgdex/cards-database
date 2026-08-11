import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トリデプス",
	},

	illustrator: "Kinu Nishimura",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		'ja-jp': "群れで 暮らす トリデプスたちは 敵に 襲われると 横に 並び 硬い 顔で 攻撃を 防ぐ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "たいこのぼうへき" },
			effect: {
				'ja-jp': "このポケモンがベンチにいるかぎり、自分のポケモン全員は、ついているエネルギーが2個以下の相手のポケモンからワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 160,
			cost: ["Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888323,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "タテトプス",
	},

	retreat: 4,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [411],
};

export default card;
