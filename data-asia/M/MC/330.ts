import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "フラージェス",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "フラージェスの 作った 花園は 心と 体を 癒す パワーが 絶えず 降り注いでいるという。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "みわくのいざない" },
			effect: {
				ja: "自分の番に1回使える。コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをこんらんにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マジカルショット" },
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
				cardmarket: 863632,
			},
		},
	],

	evolveFrom: {
		ja: "フラエッテ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [671],
};

export default card;
