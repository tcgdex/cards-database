import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "デスマス",
		'zh-tw': "哭哭面具",
		'zh-cn': "哭哭面具",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "夜な夜な 遺跡を さまよう。 もっている マスクは 人 だった ころの 自分の 顔 だという。",
		'zh-tw': "每天夜裡都在遺跡中徘徊。 據說牠拿著的面具 是牠還是人類時的臉。",
		'zh-cn': "每天夜裡都在遺跡中徘徊。 據說牠拿著的面具 是牠還是人類時的臉。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つぶやく",
				'zh-tw': "囈語",
				'zh-cn': "囈語",
			},
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: {
				ja: "ちょっとうらむ",
				'zh-tw': "咒怨一下",
				'zh-cn': "咒怨一下",
			},
			damage: 20,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793485,
				tcgplayer: 587631,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [562],
};

export default card;
