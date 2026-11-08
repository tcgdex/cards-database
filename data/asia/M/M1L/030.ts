import { Card } from "models/database/card";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グレッグル",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "毒袋を ふくらませて 鳴らし あたりに 不気味な 音を 響かせ 相手が ひるむと どくづきをする。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ひらてうち"}, "damage": 20, "cost": ["Fighting"]}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [453],

	thirdParty: {
		cardmarket: 840321,
		tcgplayer: 647139,
	},
};

export default card;