import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Venusaur",
		'fr-fr': "Florizarre",
		'es-es': "Venusaur",
		'it-it': "Venusaur",
		'pt-br': "Venusaur",
		'de-de': "Bisaflor"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Floral Scent",
				'fr-fr': "Senteur Florale",
				'es-es': "Esencia Floral",
				'it-it': "Fioraroma",
				'pt-br': "Perfume Floral",
				'de-de': "Blütenduft"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon dans votre deck, le montrer et l’ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja un Pokémon, enseñarlo y ponerlo en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Pokémon, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode procurar um Pokémon no seu deck, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Powder",
				'fr-fr': "Poudre Toxik"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.",
	},

	thirdParty: {
		cardmarket: 280331,
		tcgplayer: 90322
	}
}

export default card
