import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ベイリーフ"
	},
	illustrator: "nisimono",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	description: {
		ja: "首の周りから出されるスパイシーな香りを嗅いでいるとなぜだか戦いたくなる。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "チコリータ"
	},
	attacks: [{
		name: {
			ja: "つきとばす"
		},
		damage: 50,
		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。[バトル場に出すポケモンは相手が選ぶ。]"
		},
		cost: ["Grass", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [153]
}

export default card
