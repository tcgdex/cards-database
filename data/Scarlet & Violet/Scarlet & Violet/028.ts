import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Capsakid",
		fr: "Pimito",
		es: "Capsakid",
		it: "Capsakid",
		pt: "Capsakid",
		de: "Chilingel"
	},

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
			es: "Picantón",
			it: "Più Piccante",
			pt: "Mais Apimentado",
			de: "Nachwürzen"
		},

		effect: {
			en: "Search your deck for a Basic Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie Fire de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Energía Fire Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia base Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Energia Fire Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Playful Kick",
			fr: "Coup de Pied de Garnement",
			es: "Patada Juguetona",
			it: "Calcio Briccone",
			pt: "Chute Brincalhão",
			de: "Verspielter Kick"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card