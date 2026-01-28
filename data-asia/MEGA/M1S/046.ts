import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアス"
	},
	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	description: {
		ja: "頭のツノが七色に輝くとき永遠の命を分け与えると言われている。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ジオゲート"
		},
		effect: {
			ja: "自分の山札から超タイプのたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。"
		},
		cost: ["Psychic"]
	}, {
		name: {
			ja: "ブライトホーン"
		},
		damage: 120,
		effect: {
			ja: "次の自分の番、このポケモンは「ブライトホーン」が使えない。"
		},
		cost: ["Psychic", "Psychic", "Colorless"]
	}],
	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [716]
}

export default card
