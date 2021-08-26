import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Amoonguss",
		fr: "Gaulet",
		es: "Amoonguss",
		it: "Amoonguss",
		pt: "Amoonguss",
		de: "Hutsassa"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		591,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Crazy Spore",
				fr: "Spore Folle",
				es: "Espora Loca",
				it: "Sporafolle",
				pt: "Esporo Louco",
				de: "Verrückte Pilzspore"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Strange Reaction",
				fr: "Étrange Réaction",
				es: "Reacción Rara",
				it: "Strana Reazione",
				pt: "Reação Estranha",
				de: "Seltsame Reaktion"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Confused, it is now Paralyzed.",
				fr: "Si le Pokémon Actif de votre adversaire est Confus, il est maintenant Paralysé.",
				es: "Si el Pokémon Activo de tu rival está Confundido, este pasa a estar Paralizado.",
				it: "Se il Pokémon attivo del tuo avversario è confuso, viene paralizzato.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Confuso, ele será Paralisado.",
				de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, ist es jetzt paralysiert."
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
