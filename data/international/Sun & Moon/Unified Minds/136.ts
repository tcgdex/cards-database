import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Liepard",
		'fr-fr': "Léopardus",
		'es-es': "Liepard",
		'it-it': "Liepard",
		'pt-br': "Liepard",
		'de-de': "Kleoparda"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		510,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 40,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Scratch",
				'fr-fr': "Griffure Ténébreuse",
				'es-es': "Arañazo Sombrío",
				'it-it': "Graffio Oscuro",
				'pt-br': "Arranhão Sombrio",
				'de-de': "Schattenkratzer"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
				'pt-br': "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 90,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Their beautiful form comes from the muscles they have developed. They run silently in the night.",
	},

	thirdParty: {
		cardmarket: 388477,
		tcgplayer: 195110
	}
}

export default card
