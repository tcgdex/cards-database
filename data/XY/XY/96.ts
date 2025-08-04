import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Xerneas",
		fr: "Xerneas",
		es: "Xerneas",
		it: "Xerneas",
		pt: "Xerneas",
		de: "Xerneas"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		716,
	],

	hp: 130,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Geomancy",
				fr: "Géo-Contrôle",
				es: "Geocontrol",
				it: "Geocontrollo",
				pt: "Geomancia",
				de: "Geokontrolle"
			},
			effect: {
				en: "Choose 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a Fairy Energy card and attach it to that Pokémon. Shuffle your deck afterward.",
				fr: "Choisissez 2 de vos Pokémon de Banc. Pour chacun de ces Pokémon, cherchez une carte Énergie Fairy dans votre deck et attachez-la au Pokémon choisi. Mélangez ensuite votre deck.",
				es: "Elige 2 de tus Pokémon en Banca. Para cada uno de esos Pokémon, busca en tu baraja 1 carta de Energía Fairy y únela a ese Pokémon. Baraja las cartas de tu baraja después.",
				it: "Scegli due dei tuoi Pokémon in panchina. Per ognuno di essi, cerca nel tuo mazzo una carta Energia Fairy e assegnagliela. Poi rimischia le carte del tuo mazzo.",
				pt: "Escolha 2 dos seus Pokémon no Banco. Para cada um desses Pokémon, procure em seu baralho um card de Energia Fairy e ligue-o a esse Pokémon. Em seguida, embaralhe seus cards.",
				de: "Wähle 2 Pokémon auf deiner Bank aus. Durchsuche dein Deck nach jeweils 1 Fairy-Energiekarte für jedes dieser Pokémon und lege sie an das jeweilige Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Rainbow Spear",
				fr: "Javelot Arc-En-Ciel",
				es: "Lanza Arcoíris",
				it: "Lanciarcobaleno",
				pt: "Lança Arco-Íris",
				de: "Regenbogenlanze"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281433,
		tcgplayer: 90669
	}
}

export default card
