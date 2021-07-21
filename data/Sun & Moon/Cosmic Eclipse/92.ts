import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Dragalge",
		fr: "Kravarech",
		es: "Dragalge",
		it: "Dragalge",
		pt: "Dragalge",
		de: "Tandrak"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		691,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Skrelp",
		fr: "Venalgue",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Poison Cultivation",
				fr: "Culture de Poison",
				es: "Cultivo Venenoso",
				it: "Coltivazione Venefica",
				pt: "Cultivo Venenoso",
				de: "Giftpflege"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Poisoned, put 10 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, placez 10 marqueurs de dégâts au lieu d’un sur ce Pokémon-là entre chaque tour.",
				es: "Si el Pokémon Activo de tu rival está Envenenado, pon 10 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				it: "Se il Pokémon attivo del tuo avversario è avvelenato, metti 10 segnalini danno invece di uno su quel Pokémon tra un turno e l’altro.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, coloque 10 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, lege zwischen den Zügen 10 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sharp Fin",
				fr: "Aileron Aiguisé",
				es: "Cortaleta",
				it: "Pinnaffilata",
				pt: "Barbatana Afiada",
				de: "Schneidige Flosse"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
