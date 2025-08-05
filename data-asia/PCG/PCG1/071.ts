import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "タウロス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [128],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ノックオーバー",
			},
			effect: {
				ja: "プレイ中のスタジアムカードを捨てることができます。",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "大暴れ",
			},
			effect: {
				ja: "タウロスのダメージカウンターごとに20のダメージに加えて10ダメージを加えます。ダメージを与えた後、コインをひっくり返します。尾の場合、タウロスは混乱しています。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
