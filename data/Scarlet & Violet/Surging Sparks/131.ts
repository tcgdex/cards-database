import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Gholdengo",
		fr: "Gromago",
		es: "Gholdengo",
		it: "Gholdengo",
		pt: "Gholdengo",
		de: "Monetigo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Strike It Rich",
			fr: "Frappe Fortune",
			es: "Enriquecerse",
			it: "Colpo Ricco",
			pt: "Ganhar uma Bolada",
			de: "Goldene Gelegenheit"
		},

		effect: {
			en: "If this Pokémon evolved from Gimmighoul during this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a évolué de Mordudor pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si este Pokémon ha evolucionado de Gimmighoul durante este turno, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon si è evoluto da Gimmighoul durante questo turno, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon evoluiu de Gimmighoul durante este turno, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn sich dieses Pokémon während dieses Zuges aus Gierspenst entwickelt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Surf Back",
			fr: "Surf Retour",
			es: "Surfeo Regreso",
			it: "Retrosurf",
			pt: "Surfar de Volta",
			de: "Zurücksurfen"
		},

		effect: {
			en: "You may shuffle this Pokémon and all attached cards into your deck.",
			fr: "Vous pouvez mélanger avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
			it: "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			pt: "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			de: "Du kannst dieses Pokémon und alle angelegten Karten in dein Deck mischen."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Dsuke"
}

export default card
