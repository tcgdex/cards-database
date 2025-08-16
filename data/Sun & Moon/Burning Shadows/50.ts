import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Seviper",
		fr: "Séviper",
		es: "Seviper",
		it: "Seviper",
		pt: "Seviper",
		de: "Vipitis"
	},

	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
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
				en: "More Poison",
				fr: "Poison Sans Fin",
				es: "Veneno Plus",
				it: "Più Veleno",
				pt: "Veneno a Mais",
				de: "Giftschub"
			},
			effect: {
				en: "Put 1 more damage counter on your opponent’s Poisoned Pokémon between turns.",
				fr: "Placez 1 marqueur de dégâts supplémentaire sur le Pokémon Empoisonné de votre adversaire entre chaque tour.",
				es: "Pon 1 contador de daño más en el Pokémon Envenenado de tu rival entre turnos.",
				it: "Metti un segnalino danno in più sul Pokémon avvelenato del tuo avversario tra un turno e l’altro.",
				pt: "Coloque 1 contador de dano a mais no Pokémon Envenenado do seu oponente entre as vezes de jogar.",
				de: "Lege zwischen den Zügen 1 Schadensmarke mehr auf das vergiftete Pokémon deines Gegners."
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
				en: "Venomous Fang",
				fr: "Croc-Poison",
				es: "Colmillo Nocivo",
				it: "Dentevelenoso",
				pt: "Dente Venenoso",
				de: "Gifthauer"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
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

	thirdParty: {
		cardmarket: 299454,
		tcgplayer: 138532
	}
}

export default card
