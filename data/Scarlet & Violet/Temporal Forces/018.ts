import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		it: "Grubbin",
		pt: "Grubbin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flock",
			fr: "Nuée",
			es: "Multitud",
			it: "Frotta",
			pt: "Bando"
		},

		effect: {
			en: "Search your deck for up to 2 Grubbin and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Larvibule, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 Grubbin y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Grubbin e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Grubbin no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			es: "Agarre",
			it: "Presa",
			pt: "Agarramento Compressor"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card