import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Vivillon",
		'fr-fr': "Prismillon",
		'es-es': "Vivillon",
		'it-it': "Vivillon",
		'pt-br': "Vivillon",
		'de-de': "Vivillon"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		666,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain",
		'es-es': "Spewpa",
		'it-it': "Spewpa",
		'pt-br': "Spewpa",
		'de-de': "Puponcho"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Energy Color",
				'fr-fr': "Couleur d'Énergie",
				'es-es': "Color Energía",
				'it-it': "Colorenergia",
				'pt-br': "Cor de Energia",
				'de-de': "Energie-Farbe"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez une carte Énergie de base dans votre deck et attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, busca en tu baraja 1 carta de Energía Básica y únela a 1 de tus Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, cerca nel tuo mazzo una carta Energia base e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode jogar uma moeda. Se sair cara, procure em seu baralho um card de Energia básica e ligue-o a 1 dos seus Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Bei \"Kopf\" durchsuche dein Deck nach einer Basis-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sleep Powder",
				'fr-fr': "Poudre Dodo",
				'es-es': "Somnífero",
				'it-it': "Sonnifero",
				'pt-br': "Pó do Sono",
				'de-de': "Schlafpuder"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The patterns on this Pokémon's wings depend on the climate and topography of its habitat. It scatters colorful scales.",
	},

	thirdParty: {
		cardmarket: 286261,
		tcgplayer: 107134
	}
}

export default card
