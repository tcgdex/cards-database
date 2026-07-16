import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルバット",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "空腹の あまり はがねポケモンに 噛みついたせいで キバの 欠けた ゴルバットを たまに 見かけるぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Psychic"],
		},
		{
			name: { ja: "きゅうけつ" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558135,
			},
		},
	],

	evolveFrom: {
		ja: "ズバット",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [42],
};

export default card;
