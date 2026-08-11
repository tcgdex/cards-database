import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "サマヨール",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体の 中で 燃えている 人魂を のぞきこむと 魂を 吸い取られてしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かなしばり" },
			damage: 20,
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザを使えない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556620,
			},
		},
	],

	evolveFrom: {
		ja: "ヨマワル",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [356],
};

export default card;
