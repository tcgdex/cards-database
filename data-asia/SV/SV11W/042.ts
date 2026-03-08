import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ブルンゲルex",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "うみののろい" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手は手札から「グッズ」を出して使えず、「ポケモンのどうぐ」も出してつけられない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パワープレス" },
			damage: "80+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "このワザを使うためのエネルギーより、2個多くエネルギーがついているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		ja: "プルリル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
	dexId: [593],
	thirdParty: {
		cardmarket: 829044,
		tcgplayer: 636595,
	},
};

export default card;
