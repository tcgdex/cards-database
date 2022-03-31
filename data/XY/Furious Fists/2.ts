import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
		es: "Weepinbell",
		it: "Weepinbell",
		pt: "Weepinbell",
		de: "Ultrigaria"
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		70,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bellsprout",
		fr: "Chétiflor",
		es: "Bellsprout",
		it: "Bellsprout",
		pt: "Bellsprout",
		de: "Knofensa"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
				es: "Látigo Cepa",
				it: "Frustata",
				pt: "Chicote de Vinha",
				de: "Rankenhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spit Poison",
				fr: "Crache-Venin",
				es: "Escupir Veneno",
				it: "Sputaveleno",
				pt: "Cuspe Venenoso",
				de: "Giftspucke"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
