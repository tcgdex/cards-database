import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "レジギガス",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "だいちのめざめ" },
			effect: {
				ja: "自分の手札からこのポケモンにエネルギーをつけるたび、このポケモンのHPを「20」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ギガスパンチ" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、すべてウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563504,
				tcgplayer: 605349,
			},
		},
	],

	retreat: 4,
	rarity: "Rare",
	dexId: [486],
};

export default card;
