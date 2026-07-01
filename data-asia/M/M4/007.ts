import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "ブリガロン",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	description: {
		ja: "体当たりで ５０トンの 戦車を ひっくり返す パワー。 自分が 盾となって 仲間を 守る。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ニードルアーマー",
			},
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、このポケモンについているエネルギーの数×3個ぶんのダメカンを、ワザを使ったポケモンにのせる。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "かこいこむ",
			},
			damage: 160,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],
	variants: [{ type: "holo" }],
	retreat: 4,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [652],

	thirdParty: {
		cardmarket: 876905
	}
};

export default card;
