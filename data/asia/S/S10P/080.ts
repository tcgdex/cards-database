import { Card } from "models/database/card";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒードランVMAX",
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
				'ja-jp': "場に自分のスタジアムが出ているなら、自分の番に1回使える。このポケモンのHPを「50」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダイバクネツ" },
			damage: 180,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
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
		'ja-jp': "ヒードランV",
	},

	retreat: 4,
	regulationMark: "F",
	rarity: "Holo Rare",
	dexId: [485],
};

export default card;
