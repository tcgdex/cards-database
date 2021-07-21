import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
		es: "Weepinbell",
		it: "Weepinbell",
		pt: "Weepinbell",
		de: "Ultrigaria"
	},
	illustrator: "otumami",
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
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Burning Venom",
				fr: "Venin Brûlant",
				es: "Veneno Abrasador",
				it: "Tossina Ardente",
				pt: "Veneno Abrasador",
				de: "Brennendes Gift"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado y Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado e Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 30,

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
