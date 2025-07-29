import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
		es: "Hypno",
		it: "Hypno",
		pt: "Hypno",
		de: "Hypno"
	},

	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Meditate",
				fr: "Yoga",
				es: "Meditación",
				it: "Meditazione",
				pt: "Meditação",
				de: "Meditation"
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf dem Aktiven Pokémon deines Gegners zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
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
			damage: 70,

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
		cardmarket: 295371
	}
}

export default card
