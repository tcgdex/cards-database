import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノワダチex",
		'zh-tw': "鐵轍跡ex",
		id: "Iron Treads ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "クラッドローリング",
			'zh-tw': "鍍層回轉",
			id: "Clad Rolling"
		},

		damage: 150,

		effect: {
			ja: "のぞむなら、ダメージを与えたあとに、このポケモンについている「ブーストエナジー 未来」をトラッシュする。その場合、次の相手の番、このポケモンが受けるワザのダメージは「-150」される。",
			'zh-tw': "若希望，在造成傷害後，將這隻寶可夢身上附加的「驅勁能量 未來」丟棄。這個情況下，在下個對手的回合，這隻寶可夢受到招式的傷害「-150」點。",
			id: "Setelah memberikan kerusakan, pemain dapat membuang Pemacu Energi Futur yang dikenakan pada Pokémon ini ke Trash. Jika dilakukan, pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 150."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card