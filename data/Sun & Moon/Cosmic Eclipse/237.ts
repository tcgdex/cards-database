import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
		es: "Torkoal",
		it: "Torkoal",
		pt: "Torkoal",
		de: "Qurtel"
	},

	illustrator: "Ryota Murayama",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 110,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Fling",
				fr: "Dégommage Feu",
				es: "Lanzamiento Fuego",
				it: "Fuocolancio",
				pt: "Arremesso de Fogo",
				de: "Feuerwurf"
			},
			effect: {
				en: "Put 4 Fire Energy cards from your discard pile into your hand.",
				fr: "Ajoutez 4 cartes Énergie Fire de votre pile de défausse à votre main.",
				es: "Pon 4 cartas de Energía Fire de tu pila de descartes en tu mano.",
				it: "Prendi quattro carte Energia Fire dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				pt: "Coloque 4 cartas de Energia Fire da sua pilha de descarte na sua mão.",
				de: "Nimm 4 Fire-Energiekarten aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Kindle",
				fr: "Enflammer",
				es: "Encendido",
				it: "Infiammare",
				pt: "Inflamar",
				de: "Anzünden"
			},
			effect: {
				en: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía de este Pokémon. Si lo haces, descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata a questo Pokémon. Se lo fai, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia deste Pokémon. Se fizer isto, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 398524
	}
}

export default card
