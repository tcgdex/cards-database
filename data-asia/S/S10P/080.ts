import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒードランVMAX",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マグマゲイン" },
			effect: {
				ja: "場に自分のスタジアムが出ているなら、自分の番に1回使える。このポケモンのHPを「50」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダイバクネツ" },
			damage: 180,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651343,
				tcgplayer: 569923,
			},
		},
	],

	evolveFrom: {
		ja: "ヒードランV",
	},

	retreat: 4,
	regulationMark: "F",
	rarity: "Holo Rare",
	dexId: [485],
};

export default card;
