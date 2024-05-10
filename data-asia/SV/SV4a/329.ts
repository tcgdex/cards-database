import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "キラフロルex",
		'zh-tw': "晶光花ex",
		id: "Glimmora ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ダストフィールド",
			'zh-tw': "星塵場地",
			id: "Medan Debu"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手がベンチに出せるポケモンの数は3匹になる。相手のベンチに4匹以上いるなら、相手はベンチが3匹になるまでポケモンをトラッシュする。［ベンチの数を変更する効果は、少ない数が優先される。］",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的可放置於備戰區的寶可夢數量改為3隻。若對手的備戰區有4隻以上，則對手將寶可夢丟棄直到備戰寶可夢變為3隻為止。[變更備戰寶可夢數量的效果，以變少者為優先。]",
			id: "Selama Pokémon ini ada di Arena Bertarung, jumlah Pokémon yang dapat dimasukkan lawan ke Cadangan menjadi 3. Jika ada 4 atau lebih Pokémon di Cadangan lawan, lawan membuang Pokémon Cadangan ke Trash hingga jumlah Pokémon di Cadangan menjadi 3. [Efek yang mengubah jumlah Cadangan mengutamakan efek yang jumlahnya lebih sedikit.]"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ポイズンジェム",
			'zh-tw': "猛毒寶石",
			id: "Poison Gem"
		},

		damage: 140,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card