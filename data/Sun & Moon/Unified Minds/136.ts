import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Liepard",
		fr: "Léopardus",
		es: "Liepard",
		it: "Liepard",
		pt: "Liepard",
		de: "Kleoparda"
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
		en: "Purrloin",
		fr: "Chacripan",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
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
				en: "Shadow Scratch",
				fr: "Griffure Ténébreuse",
				es: "Arañazo Sombrío",
				it: "Graffio Oscuro",
				pt: "Arranhão Sombrio",
				de: "Schattenkratzer"
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				es: "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
				pt: "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante a próxima vez de jogar do seu oponente.",
				de: "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
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

	thirdParty: {
		cardmarket: 388477,
		tcgplayer: 195110
	}
}

export default card
