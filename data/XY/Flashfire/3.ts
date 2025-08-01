import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
		es: "Butterfree",
		it: "Butterfree",
		pt: "Butterfree",
		de: "Smettbo"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		12,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
		es: "Metapod",
		it: "Metapod",
		pt: "Metapod",
		de: "Safcon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Quiver Dance",
				fr: "Papillodanse",
				es: "Danza Aleteo",
				it: "Eledanza",
				pt: "Dança Vibratória",
				de: "Falterreigen"
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to this Pokémon. Shuffle your deck afterward. If you attached Energy in this way, heal 40 damage from this Pokémon.",
				fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck. Si vous avez attaché de l'Énergie de cette façon, soignez 40 dégâts à ce Pokémon.",
				es: "Busca en tu baraja 1 carta de Energía Básica y únela a este Pokémon. Baraja las cartas de tu baraja después. Si has unido Energía de esta manera, cura 40 puntos de daño a este Pokémon.",
				it: "Cerca nel tuo mazzo una carta Energia base e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo. Se assegni Energia in questo modo, cura questo Pokémon da 40 danni.",
				pt: "Procure em seu baralho um card de Energia básica e ligue-o a este Pokémon. Em seguida, embaralhe seus cards. Se você ligou Energia dessa forma, cure 40 de danos deste Pokémon.",
				de: "Durchsuche dein Deck nach einer Basis-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck. Falls du auf diese Weise Energie angelegt hast, heile 40 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				es: "Tornado",
				it: "Raffica",
				pt: "Lufada de Vento",
				de: "Windstoß"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281486
	}
}

export default card
