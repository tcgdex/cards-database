import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		it: "Charjabug",
		pt: "Charjabug",
		de: "Akkup"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		it: "Grubbin",
		pt: "Grubbin",
		de: "Mabula"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge",
				fr: "Chargeur",
				es: "Carga",
				it: "Sottocarica",
				pt: "Carga",
				de: "Ladevorgang"
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Énergie Lightning dans votre deck, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
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
				"Colorless",
			],
			name: {
				en: "Lightning Ball",
				fr: "Boule Éclair",
				es: "Bola Relámpago",
				it: "Fulminpalla",
				pt: "Bola de Raios",
				de: "Kugelblitz"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 90,
	types: ["Lightning"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "While its durable shell protects it from attacks, Charjabug strikes at enemies with jolts of electricity discharged from the tips of its jaws."
	}
}

export default card
