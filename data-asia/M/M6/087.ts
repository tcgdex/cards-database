import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "チルタリス",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "大空を ゆったりと 飛ぶ。 チルタリスの 美しい ハミングを 聴くと うっとり 夢心地だ。"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "コットンキャリー" },
			effect: {
				ja: "このポケモンがいるかぎり、自分のたねポケモン全員は、にげるためのエネルギーが、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はばたく" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900113,
				tcgplayer: 709240,
				cardtrader: 403170,
			},
		},
	],

	evolveFrom: {
		ja: "チルット",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [334],
};

export default card;
