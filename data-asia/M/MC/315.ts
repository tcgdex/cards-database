import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エムリット",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "悲しみの 苦しさと 喜びの 尊さを 人々に 教えた。 感情の神と 呼ばれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こころをみたす" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札から「基本[P]エネルギー」を2枚まで選び、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "ゴッドバースト" },
			damage: 160,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "自分のベンチに「ユクシー」「アグノム」がいないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863617,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [481],
};

export default card;
