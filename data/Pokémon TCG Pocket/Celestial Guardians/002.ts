import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkokod'Alola",
		es: "Exeggutorde Alola",
		it: "Exeggutordi Alola",
		de: "Alola-Kokowei",
		'pt-br': "Exeggutorde Alola",
		ko: "알로라나시"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		en: "Exeggcute"
	},

	description: {
		en: "Blazing sunlight has brought out the true form and powers of this Pokémon.",
		fr: "L'exposition aux rayons éblouissants du soleil a\nrévélé sa véritable apparence et son potentiel réel.",
		es: "Los intensos rayos solares que bañan su hábitat le han conferido\nun poder y aspecto que muchos consideran su forma original.",
		it: "L'esposizione a intensi raggi solari ha risvegliato\nl'aspetto e il potere originari di questo Pokémon.",
		de: "Durch starke Sonneneinstrahlung wurden seine\neigentlichen Kräfte und seine wahre Gestalt freigesetzt.",
		'pt-br': "A luz solar escaldante revelou a verdadeira forma\ne os poderes deste Pokémon.",
		ko: "쨍쨍 내리쬐는 태양 빛을\n받은 결과 본래의\n모습과 능력이 각성되었다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tropical Hammer",
			fr: "Marteau Tropical",
			es: "Mazazo Tropical",
			it: "Martellata Tropicale",
			de: "Tropischer Hammer",
			'pt-br': "Martelo Tropical",
			ko: "트로피컬해머"
		},

		damage: 150,
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card