import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Xurkitree",
		fr: "Câblifère",
		es: "Xurkitree",
		it: "Xurkitree",
		pt: "Xurkitree",
		de: "Voltriant"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		796,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Dazzle Blast",
				fr: "Explosion de Lumière",
				es: "Destello Deslumbrante",
				it: "Accecobomba",
				pt: "Explosão Fascinante",
				de: "Blendende Explosion"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Cablegram",
				fr: "Câblogramme",
				es: "Cablegrama",
				it: "Cablogramma",
				pt: "Cabograma",
				de: "Telegramm"
			},
			effect: {
				en: "If you have exactly 3 Prize cards remaining, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "S’il vous reste exactement 3 cartes Récompense, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Si te quedan exactamente 3 cartas de Premio, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Se hai esattamente tre carte Premio rimanenti, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Se você tiver exatamente 3 cartas de Prêmio restantes, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wenn du genau 3 verbleibende Preiskarten hast, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 100,

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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
