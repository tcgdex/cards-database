import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Exeggutor",
		'fr-fr': "Noadkokod'Alola",
		'es-es': "Exeggutorde Alola",
		'it-it': "Exeggutordi Alola",
		'de-de': "Alola-Kokowei",
		'pt-br': "Exeggutorde Alola",
		'ko-kr': "알로라나시"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [103],
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Exeggcute"
	},

	description: {
		'en-us': "Blazing sunlight has brought out the true form and powers of this Pokémon.",
		'fr-fr': "L'exposition aux rayons éblouissants du soleil a\nrévélé sa véritable apparence et son potentiel réel.",
		'es-es': "Los intensos rayos solares que bañan su hábitat le han conferido\nun poder y aspecto que muchos consideran su forma original.",
		'it-it': "L'esposizione a intensi raggi solari ha risvegliato\nl'aspetto e il potere originari di questo Pokémon.",
		'de-de': "Durch starke Sonneneinstrahlung wurden seine\neigentlichen Kräfte und seine wahre Gestalt freigesetzt.",
		'pt-br': "A luz solar escaldante revelou a verdadeira forma\ne os poderes deste Pokémon.",
		'ko-kr': "쨍쨍 내리쬐는 태양 빛을\n받은 결과 본래의\n모습과 능력이 각성되었다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Tropical Hammer",
			'fr-fr': "Marteau Tropical",
			'es-es': "Mazazo Tropical",
			'it-it': "Martellata Tropicale",
			'de-de': "Tropischer Hammer",
			'pt-br': "Martelo Tropical",
			'ko-kr': "트로피컬해머"
		},

		damage: 150,
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'ko-kr': "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["lunala"]
}

export default card