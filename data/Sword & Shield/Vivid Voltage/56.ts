import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [596],

	name: {
		en: "Galvantula",
		fr: "Mygavolt",
		es: "Galvantula",
		it: "Galvantula",
		pt: "Galvantula",
		de: "Voltula"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
		es: "Joltik",
		it: "Joltik",
		pt: "Joltik",
		de: "Wattzapf"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Stun Needle",
				fr: "Para-Dard",
				es: "Aguja Paralizante",
				it: "Ago Paralizzante",
				pt: "Agulha Estonteante",
				de: "Betäubungsnadel"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Shocking Pursuit",
				fr: "Poursuite Choquante",
				es: "Persecución Electrizante",
				it: "Inseguimento Fulminante",
				pt: "Perseguição Eletrizante",
				de: "Elektrojagd"
			},
			effect: {
				en: "This attack does 20 damage for each damage counter on your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 20 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It launches electrified fur from its abdomen as its means of attack. Opponents hit by the fur could be in for three full days and nights of paralysis."
	},

	thirdParty: {
		cardmarket: 511700
	}
}

export default card
