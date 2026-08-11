import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [596],

	name: {
		'en-us': "Galvantula",
		'fr-fr': "Mygavolt",
		'es-es': "Galvantula",
		'it-it': "Galvantula",
		'pt-br': "Galvantula",
		'de-de': "Voltula"
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
		'en-us': "Joltik",
		'fr-fr': "Statitik",
		'es-es': "Joltik",
		'it-it': "Joltik",
		'pt-br': "Joltik",
		'de-de': "Wattzapf"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Stun Needle",
				'fr-fr': "Para-Dard",
				'es-es': "Aguja Paralizante",
				'it-it': "Ago Paralizzante",
				'pt-br': "Agulha Estonteante",
				'de-de': "Betäubungsnadel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Shocking Pursuit",
				'fr-fr': "Poursuite Choquante",
				'es-es': "Persecución Electrizante",
				'it-it': "Inseguimento Fulminante",
				'pt-br': "Perseguição Eletrizante",
				'de-de': "Elektrojagd"
			},
			effect: {
				'en-us': "This attack does 20 damage for each damage counter on your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zu."
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


	stage: "Stage1",

	description: {
		'en-us': "It launches electrified fur from its abdomen as its means of attack. Opponents hit by the fur could be in for three full days and nights of paralysis."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511700,
				tcgplayer: 226453
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511700,
				tcgplayer: 226453
			}
		},
	],
}

export default card
