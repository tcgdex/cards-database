import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Articuno ex",
		'fr-fr': "Artikodin-ex",
		'es-es': "Articuno ex",
		'it-it': "Articuno-ex",
		'de-de': "Arktos-ex",
		'pt-br': "Articuno ex",
		'ko-kr': "프리져 ex"
	},

	illustrator: "kodama",
	category: "Pokemon",

	dexId: [144],
	hp: 140,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Ice Wing",
			'fr-fr': "Aile Glace",
			'es-es': "Ala Gélida",
			'it-it': "Alagelata",
			'de-de': "Frostschwinge",
			'pt-br': "Asa de Gelo",
			'ko-kr': "아이스윙"
		},

		damage: "40"
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Blizzard",
			'fr-fr': "Blizzard",
			'es-es': "Ventisca",
			'it-it': "Bora",
			'de-de': "Blizzard",
			'pt-br': "Nevasca",
			'ko-kr': "눈보라"
		},

		effect: {
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chaque Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada Pokémon no Banco do seu oponente.",
			'ko-kr': "상대의 벤치 포켓몬 전원에게도 10데미지를 준다."
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Star",
	boosters: ["mewtwo"]
}

export default card
