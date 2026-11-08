import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [229],
	set: Set,

	name: {
		'en-us': "Houndoom",
		'fr-fr': "Démolosse",
		'es-es': "Houndoom",
		'pt-br': "Houndoom",
		'it-it': "Houndoom",
		'de-de': "Hundemon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'es-es': "Houndour",
		'pt-br': "Houndour",
		'it-it': "Houndour",
		'de-de': "Hunduster"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Call to Muster",
			'fr-fr': "Appel au Rassemblement",
			'es-es': "Llamar a Filas",
			'pt-br': "Chamado de Guerra",
			'it-it': "Chiamata a Raccolta",
			'de-de': "Einberufen"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Pitch-Black Fangs",
			'fr-fr': "Crocs Nuit Noire",
			'es-es': "Colmillos Azabaches",
			'pt-br': "Presas do Breu",
			'it-it': "Zanne Buiopesto",
			'de-de': "Pechschwarze Fänge"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "kawayoo",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805452,
				tcgplayer: 610418
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805452,
				tcgplayer: 610418
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806496,
				tcgplayer: 610581
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806497,
				tcgplayer: 610682
			}
		},
	],
}

export default card
