import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "ピロスワイン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [221],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "牙を突き刺す",
			},
			damage: 40,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "継続的な充電",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、30のダメージに加えて、ヘッドごとに20のダメージを与えます。各頭のピロスワインにダメージカウンターを置きます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamps: ["1st Edition"],
		},
	],
};
