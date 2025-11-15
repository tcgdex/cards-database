import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Cresselia",
		fr: "Cresselia",
		es: "Cresselia",
		'es-mx': "Cresselia",
		de: "Cresselia",
		it: "Cresselia",
		pt: "Cresselia"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [488],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Swelling Light",
			fr: "Lumière Grandissante",
			es: "Luz Creciente",
			'es-mx': "Luz Rebosante",
			de: "Wachsendes Licht",
			it: "Luce Amplificata",
			pt: "Claridade Crescente"
		},

		effect: {
			en: "Search your deck for up to 2 Basic {P} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {P} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {P} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía {P} Básica y únelas a este Pokémon. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-{P}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base {P} e assegnale a questo Pokémon. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia {P} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
			es: "Rayo Aurora",
			'es-mx': "Rayo Aurora",
			de: "Aurorastrahl",
			it: "Raggiaurora",
			pt: "Raio Aurora"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857614
	}
}

export default card