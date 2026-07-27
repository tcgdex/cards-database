import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "サメハダー",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "かつては 背ビレが 食材として 珍重され 乱獲 された 悲しい 過去を 持っている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さめはだ" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アクアインパクト" },
			damage: "60+",
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561640,
			},
		},
	],

	evolveFrom: {
		ja: "キバニア",
	},

	retreat: 0,
	rarity: "Rare",
	dexId: [319],
};

export default card;
