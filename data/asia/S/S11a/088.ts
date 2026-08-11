import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "クチートVSTAR",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スターロンド" },
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に使える。このポケモンを自分のバトルポケモンと入れ替える。その後、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サドンイーター" },
			damage: "90+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673405,
				tcgplayer: 570851,
			},
		},
	],

	evolveFrom: {
		ja: "クチートV",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Holo Rare",
	dexId: [303],
};

export default card;
