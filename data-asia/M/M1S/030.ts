import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ライコウ"
	},
	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	description: {
		ja: "体内で渦巻く力を電撃として出しながら大地を駆け巡る荒々しいポケモン。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "エレキフォール"
		},
		damage: "30+",
		effect: {
			ja: "自分の場に雷エネルギーが4個以上あるなら、90ダメージ追加。"
		},
		cost: ["Lightning", "Lightning"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 0,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [243]
}

export default card
