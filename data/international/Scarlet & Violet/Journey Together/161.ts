import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [144],
	set: Set,

	name: {
		'en-us': "Articuno",
		'fr-fr': "Artikodin",
		'es-es': "Articuno",
		'de-de': "Arktos",
		'it-it': "Articuno",
		'pt-br': "Articuno",
		'es-mx': "Articuno"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Frigid Fluttering",
			'fr-fr': "Volettement Glacial",
			'es-es': "Aleteo Glacial",
			'de-de': "Frostiges Flattern",
			'it-it': "Ali Glaciali",
			'pt-br': "Asas Álgidas",
			'es-mx': "Aleteo Glacial"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic {W} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {W} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {W} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-{W}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base {W} e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia {W} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía Water Básica y únelas a este Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Ice Blast",
			'fr-fr': "Explosion Glacée",
			'es-es': "Ráfaga de Hielo",
			'de-de': "Eis-Blaster",
			'it-it': "Ghiaccioscoppio",
			'pt-br': "Rajada de Gelo",
			'es-mx': "Explosión Gélida"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Kuroimori",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817313,
				tcgplayer: 623588
			}
		},
	],
}

export default card
