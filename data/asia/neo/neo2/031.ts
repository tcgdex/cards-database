import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "ウォブバフェット",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [202],
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "カウンタ",
			},
			effect: {
				ja: "攻撃が対戦相手の次のターン中にウォブバッフェットに損害を与えた場合（ウォブバフェットがノックアウトされたとしても）、コインをひっくり返します。頭の場合、ウォブバッフェはディフェンディングポケモンを攻撃して等量のダメージを与えます。",
			},
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
