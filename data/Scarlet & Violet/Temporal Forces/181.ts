import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Chatot",
		fr: "Pijako",
		es: "Chatot",
		it: "Chatot",
		pt: "Chatot"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "A Cappella",
			fr: "A Cappella",
			es: "A Capela",
			it: "Canto Corale",
			pt: "A Cappella"
		},

		effect: {
			en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card