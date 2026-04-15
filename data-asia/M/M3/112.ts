import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "メガピクシーex",
	},

	illustrator: "Cona Nitanda",
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
	rarity: "Special illustration rare",
	dexId: [36],

	thirdParty: {
		cardmarket: 868122,
		tcgplayer: 674431,
	},
};

export default card;