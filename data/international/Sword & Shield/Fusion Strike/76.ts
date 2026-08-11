import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [740],
	set: Set,

	name: {
		'en-us': "Crabominable V",
		'fr-fr': "Crabominable V",
		'es-es': "Crabominable V",
		'it-it': "Crabominable V",
		'pt-br': "Crabominable V",
		'de-de': "Krawell V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "MUGENUP",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Trigger Avalanche",
			'fr-fr': "Amorce Avalanche",
			'de-de': "Lawinenauslöser",
			'es-es': "Detonar una Avalancha",
			'pt-br': "Provocar Avalanche",
			'it-it': "Causa Slavine"
		},

		effect: {
			'en-us': "Discard the top 2 cards of your opponent's deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			'de-de': "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'pt-br': "Descarte as 2 cartas de cima do baralho do seu oponente.",
			'it-it': "Scarta le prime due carte del mazzo del tuo avversario."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Destroyer Punch",
			'fr-fr': "Poing Destructeur",
			'de-de': "Zerstörungsschlag",
			'es-es': "Puñetazo Destructivo",
			'pt-br': "Soco Destrutivo",
			'it-it': "Pugno Distruttore"
		},

		damage: "90+",

		effect: {
			'en-us': "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 60 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 60 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 60 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 60 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'it-it': "Questo attacco infligge 60 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582210,
				tcgplayer: 253226
			}
		},
	],
}

export default card
