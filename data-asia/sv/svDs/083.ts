import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "โบจิ",
		id: "Greavard"
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		th: "เชื่องกับมนุษย์และขี้เหงา หากให้ความสนใจหรือดูแลมันแม้เพียงเล็กน้อยมันจะตามติดไปตลอด",
		id: "Sifat Greavard jinak dan mudah kesepian. Pokémon ini akan terus mengikutimu meskipun kamu hanya memberinya sedikit perhatian."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เล่นในหลุมศพ",
			id: "Main di Kuburan"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนการ์ดโปเกมอน[พลังจิต]ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา x10",
			id: "Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lembar Pokémon {Psychic} yang ada di Trash sendiri."
		},

		damage: "10×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card