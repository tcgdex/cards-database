import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "トリデプス",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		ja: "群れで 暮らす トリデプスたちは 敵に 襲われると 横に 並び 硬い 顔で 攻撃を 防ぐ。"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "たいこのぼうへき" },
			effect: {
				ja: "このポケモンがベンチにいるかぎり、自分のポケモン全員は、ついているエネルギーが2個以下の相手のポケモンからワザのダメージを受けない。",
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

	weaknesses: [{ type: "Fire", value: "×2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888636,
				cardtrader: 391497,
				tcgplayer: 695027,
			},
		},
	],

	evolveFrom: {
		ja: "タテトプス",
	},

	retreat: 4,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [411],
};

export default card;
