import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		'es-mx': "Lampent",
		de: "Laternecto",
		it: "Lampent",
		pt: "Lampent"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [608],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Litwick"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spreading Light",
			fr: "Propagation de Lumière",
			es: "Dispersión Lumínica",
			'es-mx': "Luz Expansiva",
			de: "Flutendes Licht",
			it: "Spargiluce",
			pt: "Alastrar Luz"
		},

		cost: ["Psychic"],

		effect: {
			en: "Search your deck for up to 3 Lampent and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 Mélancolux, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 Lampent y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 3 Lampent y ponlos en tu Banca. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 3 Laternecto und lege sie auf deine Bank. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre Lampent e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 3 Lampent no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895824,
				tcgplayer: 704794
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895824,
				tcgplayer: 704794
			}
		},
	],
}

export default card
