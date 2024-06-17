import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [157],
	name: {
		fr: "Typhlosion",
		en: "Typhlosion",
		es: "Typhlosion",
		it: "Typhlosion",
		pt: "Typhlosion",
		de: "Tornupto"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		fr: "Feurisson",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Explosible",
				en: "Exploder",
				es: "Explosionar",
				it: "Deflagratore",
				pt: "Explosivo",
				de: "Zündstoff"
			},
			effect: {
				fr: "Cherchez jusqu’à 3 cartes Énergie Fire dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				en: "Search your deck for up to 3 Fire Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				es: "Busca en tu baraja hasta 3 cartas de Energía Fire y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte Energia Fire e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas de Energia Fire no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Fire-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Enfer Explosif",
				en: "Bursting Inferno",
				es: "Infierno Explosivo",
				it: "Inferno in Fiamme",
				pt: "Inferno em Chamas",
				de: "Flammendes Inferno"
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				en: "Your opponent’s Active Pokémon is now Burned.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 100,

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
