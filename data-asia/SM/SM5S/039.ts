import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "トリデプス",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		ja: "ラムパルドと 似た 場所に いた。 ２匹が 争い 共倒れに なった 化石が 見つかることも。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "だいちのたて" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の[鋼]ポケモン全員は、特殊エネルギーがついている相手のポケモンから、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "つきとばす" },
			damage: 110,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "のぞむなら、相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559993,
			},
		},
	],

	evolveFrom: {
		ja: "タテトプス",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [411],
};

export default card;
