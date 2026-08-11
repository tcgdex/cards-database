import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バリヤードGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パールバリア" },
			effect: {
				'ja-jp': "このポケモンは、相手のポケモンから「20・40・60・80・100・120・140・160・180・200・220・240・260」のワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブレイクダウン" },
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "相手の手札の枚数ぶんのダメカンを、相手のバトルポケモンにのせる。",
			},
		},
		{
			name: { ja: "ライフトリックGX" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを、すべて回復する。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559175,
			},
		},
	],

	retreat: 2,
	rarity: "Double rare",
	dexId: [122],

	suffix: "GX",
};

export default card;
