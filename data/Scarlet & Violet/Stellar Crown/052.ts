import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [737],
	set: Set,

	name: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		it: "Charjabug",
		pt: "Charjabug",
		de: "Akkup"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	evolveFrom: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		it: "Grubbin",
		pt: "Grubbin",
		de: "Mabula"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Parallel Placement",
			fr: "Placement Parallèle",
			es: "Colocación Paralela",
			it: "Disposizione in Parallelo",
			pt: "Posicionamento Paralelo",
			de: "Parallelschaltung"
		},

		effect: {
			en: "Search your deck for up to 3 Charjabug and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 Chrysapile, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 Charjabug y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre Charjabug e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 Charjabug no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Akkup und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Makura Tami",

	thirdParty: {
		cardmarket: 785906
	}
}

export default card
