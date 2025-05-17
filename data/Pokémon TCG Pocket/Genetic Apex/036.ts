import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard ex",
		fr: "Dracaufeu-ex",
		es: "Charizard ex",
		it: "Charizard-ex",
		de: "Glurak-ex",
		'pt-br': "Charizard ex",
		ko: "리자몽 ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],
	stage: "Stage2",

	evolveFrom: {
		en: "Charmeleon"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			de: "Schlitzer",
			'pt-br': "Talho",
			ko: "베어가르기"
		},

		damage: "60"
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Crimson Storm",
			fr: "Tempête Écarlate",
			es: "Tormenta Carmesí",
			it: "Tempestarossa",
			de: "Feuerroter Sturm",
			'pt-br': "Tempestade Carmim",
			ko: "홍련의바람"
		},

		effect: {
			en: "Discard 2 {R} Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies {R} de ce Pokémon.",
			es: "Descarta 2 Energías {R} de este Pokémon.",
			it: "Rimuovi 2 Energie {R} da questo Pokémon.",
			de: "Lege 2 {R}-Energien von diesem Pokémon ab.",
			'pt-br': "Descarte 2 Energias {R} deste Pokémon.",
			ko: "이 포켓몬에서 {R}에너지를 2개 트래쉬한다."
		},

		damage: "200"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Four Diamond",
	boosters: ["charizard"]
}

export default card
