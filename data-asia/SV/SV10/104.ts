import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のイオルブ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーを 放ち 周囲を 調べている。 観測範囲は 周囲 １０キロにも 達するぞ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ロケットブレイン" },
			effect: {
				ja: "自分の番に何回でも使える。自分の場の「ロケット団のポケモン」にのっているダメカンを1個選び、自分の別のポケモンにのせ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコキネシス" },
			damage: "40+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821936,
				tcgplayer: 629045,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のレドームシ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [826],
};

export default card;
