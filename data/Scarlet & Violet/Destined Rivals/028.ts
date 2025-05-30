import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Capsakid",
		fr: "Pimito",
		de: "Chilingel",
		it: "Capsakid",
		es: "Capsakid",
		pt: "Capsakid"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Increasing Spice",
			fr: "Piment Progressif",
			de: "Nachwürzen",
			it: "Più Piccante",
			es: "Picantón",
			pt: "Mais Apimentado"
		},

		effect: {
			en: "Search your deck for a Basic {R} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {R} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Basis-{R}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia base {R} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja 1 carta de Energía {R} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta de Energia {R} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Playful Kick",
			fr: "Coup de Pied de Garnement",
			de: "Verspielter Kick",
			it: "Calcio Briccone",
			es: "Patada Juguetona",
			pt: "Chute Brincalhão"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card