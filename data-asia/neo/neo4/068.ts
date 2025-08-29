import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "輝くミュウツー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [150],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic", "Lightning"],
			name: {
				ja: "シールドを反映します",
			},
			effect: {
				ja: "攻撃が対戦相手の次のターン中に輝くMewtwoにダメージを与えた場合（輝くMewtwoがノックアウトされたとしても）、コインをひっくり返します。頭の場合、その攻撃からMewtwoを輝かせるためにすべてのダメージを防ぎ（攻撃の他の効果はまだ発生します）、攻撃ポケモンに20のダメージを与えます。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Fire"],
			name: {
				ja: "Psyburst",
			},
			effect: {
				ja: "Shining Mewtwoに取り付けられたFire Energyカードを廃棄するか、この攻撃は何もしません。この攻撃は、防御ポケモンに取り付けられた各エネルギーに対して40のダメージと10ダメージを与えます。",
			},
		},
	],

	retreat: 2,

};

export default card
