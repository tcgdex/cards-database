import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "カエンジシ"
	},
	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	description: {
		ja: "オスの たてがみは 戦いになると 摂氏２０００度の 高温になる。 近寄るだけで 大火傷だ。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "シシコ"
	},
	abilities: [{
		type: "Ability",
		name: {
			ja: "いかくのキバ"
		},
		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは「-30」される。"
		}
	}],
	attacks: [{
		name: {
			ja: "やきこがす"
		},
		damage: 70,
		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		},
		cost: ["Fire", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Water",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [668]
}

export default card
