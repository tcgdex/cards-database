import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres ex",
		fr: "Sulfura-ex",
		es: "Moltres ex",
		it: "Moltres-ex",
		de: "Lavados-ex",
		'pt-br': "Moltres ex",
		ko: "파이어 ex"
	},

	illustrator: "hncl",
	category: "Pokemon",

	dexId: [146],
	hp: 140,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Inferno Dance",
			fr: "Danse Infernale",
			es: "Danza Infernal",
			it: "Danza Fiammeggiante",
			de: "Infernotanz",
			'pt-br': "Dança Infernal",
			ko: "열화의춤"
		},

		effect: {
			en: "Flip 3 coins. Take an amount of {R} Energy from your Energy Zone equal to the number of heads and attach it to your Benched {R} Pokémon in any way you like.",
			fr: "Lancez 3 pièces. Prenez le même nombre d'Énergie {R} de votre zone Énergie que le nombre de côté face obtenu et attachez-les à vos Pokémon {R} de Banc comme il vous plaît.",
			es: "Lanza 3 monedas. Une a tus Pokémon {R} en Banca, de la manera que desees, tantas Energías {R} de tu área de Energía como caras hayan salido.",
			it: "Lancia 3 volte una moneta. Prendi un numero di Energie {R} dalla tua Zona Energia uguale al numero di volte in cui è uscito testa e assegnale ai tuoi Pokémon {R} in panchina nel modo che preferisci.",
			de: "Wirf 3 Münzen. Lege pro Kopf 1 {R}-Energie aus deinem Energiebereich beliebig an die {R}-Pokémon auf deiner Bank an.",
			'pt-br': "Jogue 3 moedas. Pegue uma quantidade de Energia {R} da sua Zona de Energia equivalente ao número de caras e ligue aos seus Pokémon {R} no Banco como desejar.",
			ko: "동전을 3번 던져서 앞면이 나온 수만큼의 {R}에너지를 자신의 에너지존에서 내보내 벤치의 {R}포켓몬에게 원하는 대로 붙인다."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
			es: "Explosión de Calor",
			it: "Caldobomba",
			de: "Hitzestoß",
			'pt-br': "Raio de Calor",
			ko: "히트블라스트"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Star",
	boosters: ["charizard"]
}

export default card
