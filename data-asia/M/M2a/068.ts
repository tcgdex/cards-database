import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ムウマージ",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "呪文のような 怪しい 鳴き声で 相手を 苦しめる。 神出鬼没の ポケモン。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アサシンマジック" },
			damage: 60,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが特殊状態なら、相手のベンチポケモン1匹に、ダメカンを6個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861311,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861636,
			},
		},
		{
			type: "reverse",
			foil: "duskball",
			thirdParty: {
				cardmarket: 861637,
			},
		},
	],

	evolveFrom: {
		ja: "ムウマ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [429],
};

export default card;
