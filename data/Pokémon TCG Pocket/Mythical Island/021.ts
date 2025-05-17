import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Lumineon",
		fr: "Luminéon",
		es: "Lumineon",
		it: "Lumineon",
		de: "Lumineon",
		'pt-br': "Lumineon",
		ko: "네오라이트"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Finneon"
	},

	description: {
		en: "With its shining light, it lures its prey close. However, the light also happens to attract ferocious fish Pokémon—its natural predators.",
		fr: "La lumière qu'il émet pour attirer ses\nproies attire également ses prédateurs,\ndes Pokémon poissons féroces.",
		es: "Atrae a sus presas con el destello que emite,\naunque eso también llama la atención de sus\nferoces depredadores marinos.",
		it: "Con la sua luce attira le prede, ma anche i feroci\nPokémon acquatici che sono suoi predatori naturali.",
		de: "Mit seinem Licht lockt es Beute an. Leider\nwerden dadurch auch grausame Fisch-Pokémon\nangezogen – seine natürlichen Fressfeinde.",
		'pt-br': "Ao brilhar intensamente, atrai as presas para perto. Porém,\na luz também chega a atrair Pokémon peixe ferozes, seus\npredadores naturais.",
		ko: "빛으로 먹이를 유인하지만\n천적인 사나운 물고기포켓몬까지\n다가온다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Aqua Liner",
			fr: "Aqua-Paquebot",
			es: "Agua en Tromba",
			it: "Fendiacque",
			de: "Wasserrohr",
			'pt-br': "Projétil d'Água",
			ko: "아쿠아라이너"
		},

		cost: ["Water", "Water"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 50 dégâts à un des Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 1마리에게 50데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	rarity: "Two Diamond"
}

export default card
