import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Bouffalant",
		fr: "Frison",
		es: "Bouffalant",
		it: "Bouffalant",
		pt: "Bouffalant",
		de: "Bisofank"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		626,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sap Sipper",
				fr: "Herbivore",
				es: "Herbívoro",
				it: "Mangiaerba",
				pt: "Engolidor de Seiva",
				de: "Vegetarier"
			},
			effect: {
				en: "This Pokémon's attacks do 40 more damage to your opponent's Grass Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de ce Pokémon infligent 40 dégâts supplémentaires aux Pokémon Grass de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de este Pokémon hacen 40 puntos de daño más a los Pokémon Grass de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Gli attacchi di questo Pokémon infliggono 40 danni in più ai Pokémon Grass del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques desse Pokémon causam 40 de danos adicionais aos Pokémon Grass do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				de: "Die Angriffe dieses Pokémon fügen den Grass-Pokémon deines Gegners 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Derail",
				fr: "Déraillement",
				es: "Descarrilar",
				it: "Deragliamento",
				pt: "Descarrilhar",
				de: "Entgleisen"
			},
			effect: {
				en: "Discard a Special Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Especial unida al Pokémon Activo de tu rival.",
				it: "Scarta un'Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte uma Energia Especial ligada ao Pokémon Ativo do seu oponente.",
				de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 273650
	}
}

export default card
