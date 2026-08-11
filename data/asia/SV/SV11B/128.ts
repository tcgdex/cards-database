import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴビット",
	},

	illustrator: "Nabatame Kazutaka",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体内で 燃える エネルギーに よって 活動しているが どんな エネルギーなのかは 不明である。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぜんりょくパンチ" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
			effect: { ja: "コインを1回投げウラなら、このワザは失敗。" },
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "holo" }],

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [622],

	thirdParty: {
		cardmarket: 829373,
		tcgplayer: 636482,
	},
};

export default card;
