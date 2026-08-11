import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'es-mx': "Lampent",
		'de-de': "Laternecto",
		'it-it': "Lampent",
		'pt-br': "Lampent"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [608],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Litwick"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Spreading Light",
			'fr-fr': "Propagation de Lumière",
			'es-es': "Dispersión Lumínica",
			'es-mx': "Luz Expansiva",
			'de-de': "Flutendes Licht",
			'it-it': "Spargiluce",
			'pt-br': "Alastrar Luz"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "Search your deck for up to 3 Lampent and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Mélancolux, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 Lampent y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 3 Lampent y ponlos en tu Banca. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Laternecto und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a tre Lampent e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por até 3 Lampent no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho."
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
