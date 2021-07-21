import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Alolan Marowak",
		fr: "Ossatueur d’Alola",
		es: "Marowak de Alola",
		it: "Marowak di Alola",
		pt: "Marowak de Alola",
		de: "Alola-Knogga"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Limbo Limbo",
				fr: "Limbo Limbo",
				es: "Limbo Limbo",
				it: "Limbo Limbo",
				pt: "Limbo Limbo",
				de: "Limbo Limbo"
			},
			effect: {
				en: "Search your deck for up to 2 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte Energia base e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Alolan Club",
				fr: "Club d’Alola",
				es: "Club de Alola",
				it: "Club di Alola",
				pt: "Clube de Alola",
				de: "Alola-Club"
			},
			effect: {
				en: "This attack does 20 damage for each of your Pokémon in play that has Alolan in its name.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu avec « d’Alola » dans son nom.",
				es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego que tenga \"de Alola\" en su nombre.",
				it: "Questo attacco infligge 20 danni per ogni tuo Pokémon in gioco con “di Alola” nel nome.",
				pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo que tenha \"de Alola” em seu nome.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Pokémon im Spiel zu, bei denen Alola zum Namen gehört."
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
