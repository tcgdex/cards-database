import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "メガピクシーex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "ひかりのつばさ"}, "effect": {"ja": "このポケモンは、相手のポケモンから特性の効果を受けない。"}}],

	attacks: [{"name": {"ja": "シューティングムーン"}, "damage": "120+", "cost": ["Psychic", "Psychic"], "effect": {"ja": "のぞむなら、自分の手札からエネルギーを4枚までトラッシュし、その枚数×40ダメージ追加。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ピッピ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [36],

	thirdParty: {
		cardmarket: 867952,
		tcgplayer: 674349,
	},
};

export default card;