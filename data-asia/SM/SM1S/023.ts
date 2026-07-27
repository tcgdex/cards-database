import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット",
	},

	illustrator: "DemizuPosuka",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "両足も 羽になった 結果 地上での 動きは 苦手。 はいずりまわることしか できない。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "さんばいどく" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は3個になる。",
			},
		},
		{
			name: { ja: "きしゅうこうげき" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561700,
			},
		},
	],

	evolveFrom: {
		ja: "ゴルバット",
	},

	retreat: 0,
	rarity: "Rare",
	dexId: [169],
};

export default card;
