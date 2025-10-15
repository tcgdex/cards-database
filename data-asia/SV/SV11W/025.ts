import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "バニリッチ",
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "雪山に 生息する ポケモン。 大昔 氷河期の ときに 南の 土地に 移動してきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "れいとうビーム" },
			damage: 50,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "バニプッチ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [583],
};

export default card;
