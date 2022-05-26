import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Regice",
		fr: "Regice",
		es: "Regice",
		it: "Regice",
		pt: "Regice",
		de: "Regice"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Regi Gate",
			fr: "Porte Regi",
			es: "Regi Puerta",
			it: "Portale Regi",
			pt: "Portal Regi",
			de: "Regi-Pforte"
		},

		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Blizzard Bind",
			fr: "Étreinte Blizzard",
			es: "Ventisca Atadura",
			it: "Legabora",
			pt: "Nevasca Aprisionante",
			de: "Blizzardbindung"
		},

		effect: {
			en: "If the Defending Pokémon is a Pokémon V, it can't attack during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon-V, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			es: "Si el Pokémon Defensor es un Pokémon V, no puede atacar durante el próximo turno de tu rival.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon-V.",
			pt: "Se o Pokémon Defensor for um Pokémon V, ele não poderá atacar durante o próximo turno do seu oponente.",
			de: "Wenn das Verteidigende Pokémon ein Pokémon-V ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card