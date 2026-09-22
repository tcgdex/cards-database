import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It uses the fine fur on its body to sense movement in the air and predict the weather...as well as its foes' thoughts."
	},

	name: {
		en: "Espeon",
		fr: "Mentali",
		de: "Psiana",
		es: "Espeon",
		it: "Espeon",
		'es-mx': "Espeon"
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	dexId: [196],
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Miraculous Shine",
			fr: "Éclat Miracle",
			de: "Wundersamer Glanz",
			es: "Brillo Milagroso",
			it: "Bagliore Miracoloso",
			'es-mx': "Brillo Milagroso"
		},

		effect: {
			en: "Devolve each of your opponent's evolved Pokémon by putting the highest Stage Evolution card on it into your opponent's hand.",
			fr: "Faites dés-évoluer chacun des Pokémon évolués de votre adversaire en ajoutant à la main de votre adversaire la carte Évolution la plus élevée placée sur ce Pokémon.",
			de: "Rückentwickle jedes entwickelte Pokémon deines Gegners, indem du deinem Gegner die daraufliegende Karte mit der höchsten Entwicklungsphase auf die Hand gibst.",
			es: "Haz involucionar a cada uno de los Pokémon evolucionados de tu rival poniendo la carta de Evolución de fase más alta que tengan sobre ellos en la mano de tu rival.",
			it: "Annulla l'evoluzione di ciascuno dei Pokémon evoluti del tuo avversario prendendo la carta Evoluzione di fase più alta presente su di esso e aggiungendola alle carte nella mano del tuo avversario.",
			'es-mx': "Haz involucionar a cada uno de los Pokémon evolucionados de tu rival poniendo la carta de Evolución de Fase más alta que esté sobre ellos en la mano de tu rival."
		},

		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			de: "Super-Psischlag",
			es: "Superrayo Psi",
			it: "Superpsico",
			'es-mx': "Superpsicotrueno"
		},

		damage: 90,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907676,
				tcgplayer: 696678
			}
		}
	],
}

export default card
