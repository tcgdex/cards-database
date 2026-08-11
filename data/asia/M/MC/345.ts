import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オーロンゲ",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	description: {
		'ja-jp': "森の 奥深くに 暮らしている。 立派に 進化しても くだらない 悪さと 悪戯は やめないのだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "かげむすび" },
			damage: "50×",
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンのにげるためのエネルギーの数×50ダメージ。",
			},
		},
		{
			name: { ja: "メガトンパンチ" },
			damage: 120,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863647,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ギモー",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [861],
};

export default card;
