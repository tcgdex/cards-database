import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		pt: "Electivire",
		de: "Elevoltek"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		466,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Electrocharge",
				fr: "Électrocharge",
				es: "Electrocarga",
				it: "Carica Voltaica",
				pt: "Eletrocarga",
				de: "Elektroladung"
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Énergie Lightning dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Energía Lightning y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte Energia Lightning e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas de Energia Lightning no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Lightning-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "High-Voltage Knuckle",
				fr: "Poing Haute Tension",
				es: "Nudillo Alto Voltaje",
				it: "Pugno Folgorante",
				pt: "Punho de Alta Voltagem",
				de: "Starkstromfaust"
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
				es: "Descarta 3 Energías de este Pokémon.",
				it: "Scarta tre Energie assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias deste Pokémon.",
				de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 365710,
		tcgplayer: 178881
	}
}

export default card
