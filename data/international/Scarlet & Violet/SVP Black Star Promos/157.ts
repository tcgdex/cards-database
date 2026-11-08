import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		'en-us': "Zapdos",
		'fr-fr': "Électhor",
		'es-es': "Zapdos",
		'it-it': "Zapdos",
		'pt-br': "Zapdos",
		'de-de': "Zapdos"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Follow-Up Bolt",
			'fr-fr': "Éclair de Relance",
			'es-es': "Seguimiento Rayo",
			'it-it': "Proseguimento Fulmine",
			'pt-br': "Raio em Sequência",
			'de-de': "Anschluss-Blitz"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Drill Peck",
			'fr-fr': "Bec Vrille",
			'es-es': "Pico Taladro",
			'it-it': "Perforbecco",
			'pt-br': "Bico Broca",
			'de-de': "Bohrschnabel"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Nisota Niso",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 796930,
				tcgplayer: 594405
			},
		}
	],
}

export default card
