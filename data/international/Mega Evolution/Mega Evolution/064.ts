import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Xerneas",
		'fr-fr': "Xerneas",
		'de-de': "Xerneas",
		'it-it': "Xerneas",
		'es-es': "Xerneas",
		'pt-br': "Xerneas",
		'es-mx': "Xerneas"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [716],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Geo Gate",
			'fr-fr': "Géo-Portail",
			'de-de': "Geoportal",
			'it-it': "Geoportale",
			'es-es': "Geoportal",
			'pt-br': "Geoportal",
			'es-mx': "Geoportal"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Basic {P} Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon {P} de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-{P}-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Base {P} e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon {P} Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 3 Pokémon {P} Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 3 Pokémon {P} Básicos y ponlos en tu Banca. Después, baraja tu mazo."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Bright Horns",
			'fr-fr': "Cornes Lumineuses",
			'de-de': "Glänzendes Geweih",
			'it-it': "Corna Splendenti",
			'es-es': "Cuernos Brillantes",
			'pt-br': "Chifres Luminosos",
			'es-mx': "Cuernos Brillantes"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Bright Horns.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Cornes Lumineuses.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Glänzendes Geweih nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Corna Splendenti.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Cuernos Brillantes.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Chifres Luminosos.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Cuernos Brillantes."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851135,
				tcgplayer: 654403
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851135,
				tcgplayer: 654403
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851263,
			}
		},
		{
			type: "normal",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 851264,
			}
		},
	],
}

export default card
