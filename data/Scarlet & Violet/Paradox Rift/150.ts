import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [295],
	set: Set,

	name: {
		en: "Exploud",
		fr: "Brouhabam",
		es: "Exploud",
		it: "Exploud",
		pt: "Exploud",
		de: "Krawumms"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sudden Shout",
			fr: "Cri Soudain",
			es: "Bramido Súbito",
			it: "Urlo Improvviso",
			pt: "Grito Repentino",
			de: "Schlagartiger Schrei"
		},

		effect: {
			en: "Discard your opponent's Active Pokémon and all attached cards. If this Pokémon didn't evolve from Loudred during this turn, this attack does nothing.",
			fr: "Défaussez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées. Si ce Pokémon n'a pas évolué de Ramboum pendant ce tour, cette attaque ne fait rien.",
			es: "Descarta el Pokémon Activo de tu rival y todas las cartas unidas a él. Si este Pokémon no ha evolucionado de Loudred durante este turno, este ataque no hace nada.",
			it: "Scarta il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate. Se questo Pokémon non si è evoluto da Loudred durante questo turno, questo attacco non ha effetto.",
			pt: "Descarte o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele. Se este Pokémon não evoluiu de Loudred durante este turno, este ataque não fará nada.",
			de: "Lege das Aktive Pokémon deines Gegners und alle angelegten Karten auf seinen Ablagestapel. Wenn sich dieses Pokémon während dieses Zuges nicht aus Krakeelo entwickelt hat, hat diese Attacke keine Auswirkungen."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Headbang",
			fr: "Frappe de Tête",
			es: "Cabecear",
			it: "Scuotitesta",
			pt: "Baque de Cabeça",
			de: "Headbangen"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "LINNE",

	thirdParty: {
		cardmarket: 740690
	}
}

export default card