import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
		es: "Darmanitan",
		it: "Darmanitan",
		pt: "Darmanitan",
		de: "Flampivian"
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
		en: "Darumaka",
		fr: "Darumarond",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Find Wildfire",
				fr: "Traqueur de Feu de Forêt",
				es: "Encontrar Foco Fuego",
				it: "Trovaincendio",
				pt: "Localizar Incêndio",
				de: "Lauffeuer finden"
			},
			effect: {
				en: "Search your deck for up to 3 Fire Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes Énergie Fire dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas de Energía Fire, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte Energia Fire, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas de Energia Fire no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Fire-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Blitz",
				fr: "Boutefeu",
				es: "Envite Ígneo",
				it: "Fuococarica",
				pt: "Blitz de Labaredas",
				de: "Flammenblitz"
			},
			effect: {
				en: "Discard all Fire Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie Fire de ce Pokémon.",
				es: "Descarta todas las Energías Fire de este Pokémon.",
				it: "Scarta tutte le Energie Fire assegnate a questo Pokémon.",
				pt: "Descarte todas as Energias Fire deste Pokémon.",
				de: "Lege alle Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 372316
	}
}

export default card
