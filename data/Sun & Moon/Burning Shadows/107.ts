import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Noctowl",
		fr: "Noarfang",
		es: "Noctowl",
		it: "Noctowl",
		pt: "Noctowl",
		de: "Noctuh"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		164,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				es: "Hipnorrayo",
				it: "Ipnobomba",
				pt: "Borrifada Hipnótica",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Night Raid",
				fr: "Raid Nocturne",
				es: "Incursión Nocturna",
				it: "Incursione Notturna",
				pt: "Incursão Noturna",
				de: "Nachtplünderung"
			},
			effect: {
				en: "Your opponent reveals their hand. Discard a Pokémon from it.",
				fr: "Votre adversaire dévoile sa main. Défaussez-en un Pokémon.",
				es: "Tu rival enseña las cartas de su mano. Descarta 1 Pokémon de su mano.",
				it: "Il tuo avversario mostra le carte che ha in mano. Scarta un Pokémon tra esse.",
				pt: "Seu oponente revela a própria mão. Descarte 1 Pokémon que estiver lá.",
				de: "Dein Gegner zeigt dir seine Handkarten. Lege 1 Pokémon aus der Hand deines Gegners auf seinen Ablagestapel."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299508
	}
}

export default card
