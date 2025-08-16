import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [493],
	set: Set,

	name: {
		fr: "Arceus V",
		de: "Arceus V",
		es: "Arceus V",
		pt: "Arceus V",
		it: "Arceus V",
		en: "Arceus V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Charge Trinité",
			de: "Ladevorgang der Dreiheit",
			es: "Carga Trinidad",
			pt: "Carga Tríptica",
			it: "Carica Triade",
			en: "Trinity Charge"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, puis attachez-les à vos Pokémon-V comme il vous plaît. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon-V an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon V de la manera que desees. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 3 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon V como desejar. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale ai tuoi Pokémon-V nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			en: "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon V in any way you like. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Lame Puissante",
			de: "Kraftklinge",
			es: "Filo Poderoso",
			pt: "Gume Poderoso",
			it: "Colpotente",
			en: "Power Edge"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 652086
	}
}

export default card