import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charizard ex",
		'fr-fr': "Dracaufeu-ex",
		'es-es': "Charizard ex",
		'it-it': "Charizard-ex",
		'de-de': "Glurak-ex",
		'pt-br': "Charizard ex",
		'ko-kr': "리자몽 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [6],
	hp: 180,
	types: ["Fire"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Charmeleon"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'de-de': "Schlitzer",
			'pt-br': "Talho",
			'ko-kr': "베어가르기"
		},

		damage: "60"
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Crimson Storm",
			'fr-fr': "Tempête Écarlate",
			'es-es': "Tormenta Carmesí",
			'it-it': "Tempestarossa",
			'de-de': "Feuerroter Sturm",
			'pt-br': "Tempestade Carmim",
			'ko-kr': "홍련의바람"
		},

		effect: {
			'en-us': "Discard 2 {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies {R} de ce Pokémon.",
			'es-es': "Descarta 2 Energías {R} de este Pokémon.",
			'it-it': "Rimuovi 2 Energie {R} da questo Pokémon.",
			'de-de': "Lege 2 {R}-Energien von diesem Pokémon ab.",
			'pt-br': "Descarte 2 Energias {R} deste Pokémon.",
			'ko-kr': "이 포켓몬에서 {R}에너지를 2개 트래쉬한다."
		},

		damage: "200"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Star",
	boosters: ["charizard"]
}

export default card
