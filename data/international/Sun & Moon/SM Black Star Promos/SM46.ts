import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Seviper",
		'fr-fr': "Séviper",
		'es-es': "Seviper",
		'it-it': "Seviper",
		'pt-br': "Seviper",
		'de-de': "Vipitis"
	},
	illustrator: "Eri Yamaki",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		336,
	],
	hp: 100,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "More Poison",
				'fr-fr': "Poison Sans Fin",
				'es-es': "Veneno Plus",
				'it-it': "Più Veleno",
				'pt-br': "Veneno a Mais",
				'de-de': "Giftschub"
			},
			effect: {
				'en-us': "Put 1 more damage counter on your opponent’s Poisoned Pokémon between turns.",
				'fr-fr': "Placez 1 marqueur de dégâts supplémentaire sur le Pokémon Empoisonné de votre adversaire entre chaque tour.",
				'es-es': "Pon 1 contador de daño más en el Pokémon Envenenado de tu rival entre turnos.",
				'it-it': "Metti un segnalino danno in più sul Pokémon avvelenato del tuo avversario tra un turno e l’altro.",
				'pt-br': "Coloque 1 contador de dano a mais no Pokémon Envenenado do seu oponente entre as vezes de jogar.",
				'de-de': "Lege zwischen den Zügen 1 Schadensmarke mehr auf das vergiftete Pokémon deines Gegners."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Venomous Fang",
				'fr-fr': "Croc-Poison",
				'es-es': "Colmillo Nocivo",
				'it-it': "Dentevelenoso",
				'pt-br': "Dente Venenoso",
				'de-de': "Gifthauer"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "In battle, it uses its bladed tail to counter any Zangoose. It secretes a deadly venom in its tail.",
	},
}

export default card
