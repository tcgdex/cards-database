import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax",
		es: "Volcarona",
		it: "Volcarona",
		pt: "Volcarona",
		de: "Ramoth"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		637,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
		es: "Larvesta",
		it: "Larvesta",
		pt: "Larvesta",
		de: "Ignivor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Solar Birth",
				fr: "Naissance Solaire",
				es: "Nacimiento Solar",
				it: "Solarnascita",
				pt: "Nascimento Solar",
				de: "Solargenese"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, search your deck for up to 2 basic Energy cards and attach them to that Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Ensuite, cherchez jusqu'à 2 cartes Énergie de base dans votre deck et attachez-les au Pokémon choisi. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, busca en tu baraja hasta 2 cartas de Energía Básica y únelas a ese Pokémon. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Quindi cerca nel tuo mazzo fino a due carte Energia base e assegnale a quel Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho 1 Pokémon Básico e coloque-o no seu Banco. Em seguida, procure em seu baralho até 2 cards de Energia básica e ligue-os a aquele Pokémon. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Durchsuche dein Deck anschließend nach bis zu 2 Basis-Energiekarten und lege sie an das Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
				es: "Lanzallamas",
				it: "Lanciafiamme",
				pt: "Lança-Chamas",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 284198,
		tcgplayer: 100622
	}
}

export default card
