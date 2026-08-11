import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mantine",
		'fr-fr': "Démanta",
		'de-de': "Mantax",
		'it-it': "Mantine",
		'es-es': "Mantine",
		'pt-br': "Mantine",
		'es-mx': "Mantine"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",
	dexId: [226],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'de-de': "Familienruf",
			'it-it': "Cerca Famiglia",
			'es-es': "Llamar a la Familia",
			'pt-br': "Chamar a Família",
			'es-mx': "Llamar a la Familia"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja tu mazo."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Waterfall",
			'fr-fr': "Cascade",
			'de-de': "Kaskade",
			'it-it': "Cascata",
			'es-es': "Cascada",
			'pt-br': "Cachoeira",
			'es-mx': "Cascada"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851103,
				tcgplayer: 654371
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851103,
				tcgplayer: 654371
			}
		},
	],
}

export default card
