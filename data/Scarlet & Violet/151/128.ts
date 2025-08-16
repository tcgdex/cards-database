import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		fr: "Tauros",
		en: "Tauros",
		es: "Tauros",
		it: "Tauros",
		pt: "Tauros",
		de: "Tauros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Réunion des Troupes",
			en: "Gather the Crew",
			es: "Juntar al Equipo",
			it: "Squadra a Raccolta",
			pt: "Juntar a Galera",
			de: "Alle an Bord"
		},

		effect: {
			fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Frénésie",
			en: "Rage",
			es: "Furia",
			it: "Ira",
			pt: "Ira",
			de: "Raserei"
		},

		effect: {
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Takeshi Nakamura",

	thirdParty: {
		cardmarket: 733723
	}
}

export default card