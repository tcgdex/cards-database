import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Surskit",
		fr: "Arakdo",
		de: "Gehweiher",
		es: "Surskit",
		it: "Surskit",
		pt: "Surskit",
		'es-mx': "Surskit"
	},

	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Multiply",
			fr: "Multiplication",
			de: "Vervielfachung",
			es: "Multiplicar",
			it: "Moltiplicazione",
			pt: "Multiplicar",
			'es-mx': "Multiplicar"
		},

		effect: {
			en: "Search your deck for up to 2 Surskit and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Arakdo, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Gehweiher und lege sie auf deine Bank. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 2 Surskit y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Surskit e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 2 Surskit no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 2 Surskit y ponlos en tu Banca. Después, baraja tu mazo."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			de: "Käferbiss",
			es: "Picadura",
			it: "Coleomorso",
			pt: "Picada",
			'es-mx': "Picadura"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 727564,
		cardmarket: 918811
	}
}

export default card