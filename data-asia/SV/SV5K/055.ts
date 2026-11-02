import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨルノズク",
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "特殊な つくりの 両目は わずかな 光さえ あれば 暗闇でも 昼のように 見える。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かぎづめハント" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752836,
				tcgplayer: 568389,
			},
		},
	],

	evolveFrom: {
		ja: "ホーホー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [164],
};

export default card;
