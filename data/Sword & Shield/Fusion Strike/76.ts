import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Crabominable V",
		fr: "Crabominable V",
		es: "Crabominable V",
		it: "Crabominable V",
		pt: "Crabominable V",
		de: "Krawell V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",
	retreat: 4,
	regulationMark: "E",
	illustrator: "MUGENUP",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Trigger Avalanche",
			fr: "Amorce Avalanche",
			de: "Lawinenauslöser",
			es: "Detonar una Avalancha",
			pt: "Provocar Avalanche",
			it: "Causa Slavine"
		},

		effect: {
			en: "Discard the top 2 cards of your opponent's deck.",
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
			pt: "Descarte as 2 cartas de cima do baralho do seu oponente.",
			it: "Scarta le prime due carte del mazzo del tuo avversario."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Destroyer Punch",
			fr: "Poing Destructeur",
			de: "Zerstörungsschlag",
			es: "Puñetazo Destructivo",
			pt: "Soco Destrutivo",
			it: "Pugno Distruttore"
		},

		damage: "90+",

		effect: {
			en: "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 60 Schadenspunkte mehr zu.",
			es: "Este ataque hace 60 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			pt: "Este ataque causa 60 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			it: "Questo attacco infligge 60 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582210
	}
}

export default card
