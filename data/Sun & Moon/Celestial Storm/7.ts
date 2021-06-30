import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Treecko",
		fr: "Arcko",
		es: "Treecko",
		it: "Treecko",
		pt: "Treecko",
		de: "Geckarbor"
	},
	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		252,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Poison",
				fr: "Poison Dodo",
				es: "Veneno Somnífero",
				it: "Sonnoveleno",
				pt: "Veneno Sonífero",
				de: "Schlafgift"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
