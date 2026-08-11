import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Yveltal BREAK",
		fr: "Yveltal TURBO",
		es: "Yveltal TURBO",
		it: "Yveltal TURBO",
		pt: "Yveltal TURBO",
		de: "Yveltal-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Yveltal",
		fr: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		pt: "Yveltal",
		de: "Yveltal"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Baleful Night",
				fr: "Nuit Maléfique",
				es: "Noche Siniestra",
				it: "Malevola Notte",
				pt: "Noite Desastrosa",
				de: "Unheilvolle Nacht"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a ciascun Pokémon nella panchina del tuo avversario che abbia dei segnalini danno. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 de danos a cada um dos Pokémon no Banco do seu oponente que já possui contadores de danos. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 291480,
		tcgplayer: 121195
	}
}

export default card
