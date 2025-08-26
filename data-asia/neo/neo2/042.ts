import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "タイラニター",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [248],
	hp: 100,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スラム",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
		{
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			name: {
				ja: "トランプ",
			},
			effect: {
				ja: "遊びのベンチポケモン（あなたと相手）について、コインをひっくり返します。頭の場合、この攻撃はそのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
