import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Emboar",
		'fr-fr': "Roitiflam",
		'es-es': "Emboar",
		'it-it': "Emboar",
		'pt-br': "Emboar",
		'de-de': "Flambirex"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		500,
	],

	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Explosive Fire Dance",
				'fr-fr': "Danse du Feu Explosive",
				'es-es': "Danza Ígnea Explosiva",
				'it-it': "Rogodanza Esplosiva",
				'pt-br': "Dança de Fogo Explosiva",
				'de-de': "Explosiver Feuertanz"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may look at the top 8 cards of your deck and attach any number of basic Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez regarder les 8 cartes du dessus de votre deck, puis attacher le nombre désiré de cartes Énergie de base trouvées à vos Pokémon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes mirar las 8 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi guardare le prime otto carte del tuo mazzo e assegnare a piacimento un numero qualsiasi di carte Energia base presenti tra esse ai tuoi Pokémon. Rimischia le altre carte nel tuo mazzo.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode olhar as 8 primeiras cartas do seu baralho e ligar qualquer número de cartas de Energia básica que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dir die obersten 8 Karten deines Decks anschauen und beliebig viele Basis-Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Mische die anderen Karten zurück in dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de Chaleur",
				'es-es': "Explosión de Calor",
				'it-it': "Caldobomba",
				'pt-br': "Raio de Calor",
				'de-de': "Hitzestoß"
			},

			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It can throw a fire punch by setting its fists on fire with its fiery chin. It cares deeply about its friends.",
	},

	thirdParty: {
		cardmarket: 407814,
		tcgplayer: 201211
	}
}

export default card
