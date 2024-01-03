import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi",
		es: "Jirachi",
		it: "Jirachi",
		pt: "Jirachi",
		de: "Jirachi"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Amazing Rare",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Metal",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dreamy Revelation",
				fr: "Révélation Onirique",
				es: "Revelación de Ensueño",
				it: "Rivelazione Onirica",
				pt: "Revelação Onírica",
				de: "Traumgebung"
			},
			effect: {
				en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card back on top of your deck.",
				fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 2 cartes du dessus de votre deck, puis ajouter l'une d'elles à votre main. Placez l'autre carte sur le dessus de votre deck.",
				es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mirar las 2 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Vuelve a poner la otra carta en la parte superior de tu baraja.",
				it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi guardare le prime due carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Metti l'altra carta in cima al tuo mazzo.",
				pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá olhar as 2 cartas de cima do seu baralho e colocar 1 delas na sua mão. Coloque a outra carta de volta como a carta de cima do seu baralho.",
				de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du dir die obersten 2 Karten deines Decks anschauen und 1 von ihnen auf deine Hand nehmen. Lege die andere Karte zurück auf dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Fighting",
				"Metal",
			],
			name: {
				en: "Amazing Star",
				fr: "Étoile Magnifique",
				es: "Estrella Increíble",
				it: "Stella Policroma",
				pt: "Estrela Incrível",
				de: "Atemberaubender Stern"
			},
			effect: {
				en: "Search your deck for up to 7 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu'à 7 cartes Énergie de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 7 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a sette carte Energia base e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 7 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 7 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Once every 1,000 years, the singing of a pure voice will rouse this Pokémon from its near-perpetual slumber. It wakes for only seven days."
	}
}

export default card
