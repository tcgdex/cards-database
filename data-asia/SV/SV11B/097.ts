import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ビクティニ",
	},

	illustrator: "Amelicart",
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [494],
};

export default card;
