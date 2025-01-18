import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Houndoom",
		fr: "Démolosse",
		es: "Houndoom",
		pt: "Houndoom",
		it: "Houndoom",
		de: "Hundemon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Call to Muster",
			fr: "Appel au Rassemblement",
			es: "Llamar a Filas",
			pt: "Chamado de Guerra",
			it: "Chiamata a Raccolta",
			de: "Einberufen"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 cartas de Energia Básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Pitch-Black Fangs",
			fr: "Crocs Nuit Noire",
			es: "Colmillos Azabaches",
			pt: "Presas do Breu",
			it: "Zanne Buiopesto",
			de: "Pechschwarze Fänge"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card