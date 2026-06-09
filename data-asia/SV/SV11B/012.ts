import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ビクティニ",
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "勝利を もたらす ポケモン。 ビクティニを 連れた トレーナーは どんな 勝負にも 勝てるという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "Vフォース" },
			damage: 120,
			cost: ["Fire", "Fire"],
			effect: {
				ja: "自分のベンチポケモンが4匹以下なら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "holo" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [494],

	thirdParty: {
		cardmarket: 828458,
		tcgplayer: 636366,
	},
};

export default card;
