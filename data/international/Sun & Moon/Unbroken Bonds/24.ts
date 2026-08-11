import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Darmanitan",
		'fr-fr': "Darumacho",
		'es-es': "Darmanitan",
		'it-it': "Darmanitan",
		'pt-br': "Darmanitan",
		'de-de': "Flampivian"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		555,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Find Wildfire",
				'fr-fr': "Traqueur de Feu de Forêt",
				'es-es': "Encontrar Foco Fuego",
				'it-it': "Trovaincendio",
				'pt-br': "Localizar Incêndio",
				'de-de': "Lauffeuer finden"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Fire Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 3 cartes Énergie Fire dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 cartas de Energía Fire, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a tre carte Energia Fire, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 3 cartas de Energia Fire no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Fire-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Flare Blitz",
				'fr-fr': "Boutefeu",
				'es-es': "Envite Ígneo",
				'it-it': "Fuococarica",
				'pt-br': "Blitz de Labaredas",
				'de-de': "Flammenblitz"
			},
			effect: {
				'en-us': "Discard all Fire Energy from this Pokémon.",
				'fr-fr': "Défaussez toute l’Énergie Fire de ce Pokémon.",
				'es-es': "Descarta todas las Energías Fire de este Pokémon.",
				'it-it': "Scarta tutte le Energie Fire assegnate a questo Pokémon.",
				'pt-br': "Descarte todas as Energias Fire deste Pokémon.",
				'de-de': "Lege alle Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "When one is injured in a fierce battle, it hardens into a stone-like form. Then it meditates and sharpens its mind.",
	},

	thirdParty: {
		cardmarket: 372316,
		tcgplayer: 189068
	}
}

export default card
