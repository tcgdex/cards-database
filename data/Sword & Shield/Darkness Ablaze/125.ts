import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [599],
	name: {
		en: "Klink",
		fr: "Tic",
		es: "Klink",
		it: "Klink",
		pt: "Klink",
		de: "Klikk"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Call for Backup",
				fr: "Renforts",
				es: "Pedir Refuerzos",
				it: "Rinforzi",
				pt: "Chamar Reforço",
				de: "Back-up"
			},
			effect: {
				en: "Search your deck for a Metal Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck un Pokémon Metal, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Pokémon Metal, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un Pokémon Metal, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 Pokémon Metal no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Metal-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "The two minigears that compose this Pokémon are closer than twins. They mesh well only with each other."
	}
}

export default card
