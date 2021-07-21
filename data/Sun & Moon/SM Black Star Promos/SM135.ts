import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Latias",
		fr: "Latias",
		es: "Latias",
		it: "Latias",
		pt: "Latias",
		de: "Latias"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 110,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				es: "Hipnorrayo",
				it: "Ipnobomba",
				pt: "Borrifada Hipnótica",
				de: "Hypnoschuss"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				es: "El Pokémon Defensor pasa a estar Dormido.",
				it: "Il Pokémon Difensore è Addormentato.",
				pt: "O Pokémon Defensor agora está Adormecido.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mist Ball",
				fr: "Ball’Brume",
				es: "Bola Neblina",
				it: "Foschisfera",
				pt: "Bola de Névoa",
				de: "Nebelball"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy and a Psychic Energy from this Pokémon.",
				fr: "Lancez une pièce. Si c’est pile, défaussez une Énergie Fire et une Énergie Psychic de ce Pokémon.",
				es: "Lanza 1 moneda. Si sale cruz, descarta 1 Energía Fire y 1 Energía Psychic de este Pokémon.",
				it: "Lancia una moneta. Se esce croce, scarta un’Energia Fire e un’Energia Psychic assegnate a questo Pokémon.",
				pt: "Jogue 1 moeda. Se sair coroa, descarte 1 Energia Fire e 1 Energia Psychic deste Pokémon.",
				de: "Wirf 1 Münze. Lege bei Zahl 1 Fire-Energie und 1 Psychic-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
