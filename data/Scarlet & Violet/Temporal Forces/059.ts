import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [836],
	set: Set,

	name: {
		en: "Boltund",
		fr: "Fulgudog",
		es: "Boltund",
		it: "Boltund",
		pt: "Boltund",
		de: "Bellektro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Electrifying Dash",
			fr: "Ruée Électrifiante",
			es: "Carrera Electrizante",
			it: "Corsa Elettrizzante",
			pt: "Arremetida Eletrizante",
			de: "Elektrisierender Spurt"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Lightning Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie Lightning de base, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Lightning Básica y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base Lightning e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Lightning Básica no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Lightning-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card