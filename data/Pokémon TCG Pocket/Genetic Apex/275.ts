import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno ex",
		fr: "Artikodin-ex",
		es: "Articuno ex",
		it: "Articuno-ex",
		de: "Arktos-ex",
		'pt-br': "Articuno ex",
		ko: "프리져 ex"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Ice Wing",
			fr: "Aile Glace",
			es: "Ala Gélida",
			it: "Alagelata",
			de: "Frostschwinge",
			'pt-br': "Asa de Gelo",
			ko: "아이스윙"
		},

		damage: "40"
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Blizzard",
			fr: "Blizzard",
			es: "Ventisca",
			it: "Bora",
			de: "Blizzard",
			'pt-br': "Nevasca",
			ko: "눈보라"
		},

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 10 dégâts à chaque Pokémon de Banc de votre adversaire.",
			es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 전원에게도 10데미지를 준다."
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Star"
}

export default card
