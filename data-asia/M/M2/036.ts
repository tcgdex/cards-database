import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ムウマージex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "うずまくことだま"}, "effect": {"ja": "このポケモンがバトル場にいるかぎり、相手の番に、相手のバトルポケモンがベンチにもどるたび、新しく出てきたポケモンをこんらんにする。"}}],

	attacks: [{"name": {"ja": "シックスマジック"}, "damage": 150, "cost": ["Psychic", "Psychic"], "effect": {"ja": "のぞむなら、自分の手札が6枚になるように、山札を引く。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ムウマ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [429],

	suffix: "EX",

	thirdParty: {
		cardmarket: 850543,
		tcgplayer: 655815,
	},
};

export default card;