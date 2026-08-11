import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エーフィ&デオキシスGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコサークル" },
			damage: "10+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチの[超]ポケモンの数×30ダメージ追加。",
			},
		},
		{
			name: { ja: "クロスディヴィジョンGX" },
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "ダメカン10個を、相手のポケモンに好きなようにのせる。追加でエネルギーが3個ついているなら、のせるダメカンの数は20個になる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 547076,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [196, 386],

	suffix: "TAG TEAM-GX",
};

export default card;
