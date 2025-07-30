import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "ピロスワイン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [221],
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "凍る息",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御ポケモンは今眠っています。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "トランプ",
			},
			effect: {
				ja: "ベンチ付きポケモン（あなたと相手）ごとに、コインをひっくり返します。頭の場合、この攻撃はそのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 40,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamps: ["1st Edition"],
		},
	],
};
