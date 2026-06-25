import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ルージュラ"
	},
	illustrator: "Minahamu",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	description: {
		ja: "人間の言葉のような不思議な鳴き声。ルージュラに歌わせる曲を作る音楽家もいる。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "サイコキネシス"
		},
		damage: "30+",
		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
		},
		cost: ["Psychic", "Psychic"]
	}],
	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [124]
}

export default card
