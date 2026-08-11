import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [587],
	set: Set,

	name: {
		'en-us': "Emolga",
		'fr-fr': "Emolga",
		'de-de': "Emolga",
		'it-it': "Emolga",
		'pt-br': "Emolga",
		'es-es': "Emolga",
		'es-mx': "Emolga"
	},

	illustrator: "Tomowaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'de-de': "Familienruf",
			'it-it': "Cerca Famiglia",
			'pt-br': "Chamar a Família",
			'es-es': "Llamar a la Familia",
			'es-mx': "Llamar a la Familia"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique",
			'de-de': "Statischer Schock",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática",
			'es-es': "Impacto Estático",
			'es-mx': "Impacto Estático"
		},

		damage: 20
	}],

	retreat: 0,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835957,
				tcgplayer: 642481
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835957,
				tcgplayer: 642481
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836327,
				tcgplayer: 642726
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836329,
				tcgplayer: 642653
			}
		}
	]
}

export default card
