import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Delphox BREAK",
		'fr-fr': "Goupelin TURBO",
		'es-es': "Delphox TURBO",
		'it-it': "Delphox TURBO",
		'pt-br': "Delphox TURBO",
		'de-de': "Fennexis-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		655,
	],

	hp: 180,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Delphox",
		'fr-fr': "Goupelin",
		'es-es': "Delphox",
		'it-it': "Delphox",
		'pt-br': "Delphox",
		'de-de': "Fennexis"
	},

	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Flare Witch",
				'fr-fr': "Sorcier Flamboyant",
				'es-es': "Brujería Ígnea",
				'it-it': "Strega Fiamma",
				'pt-br': "A Bruxa de Chamas",
				'de-de': "Hexenflackern"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Fire Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Énergie Fire dans votre deck et l'attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 carta de Energía Fire y unirla a 1 de tus Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo una carta Energia Fire e assegnarla a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode procurar em seu baralho um card de Energia Fire e o ligar a 1 dos seus Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Fire-Energiekarte durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck."
			},
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 289840,
		tcgplayer: 117514
	}
}

export default card
