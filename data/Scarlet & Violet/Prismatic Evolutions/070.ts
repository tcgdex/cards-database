import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Archaludon",
		fr: "Pondralugon",
		es: "Archaludon",
		pt: "Archaludon",
		it: "Archaludon",
		de: "Briduradon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Bridge",
			fr: "Pont Métal",
			es: "Puente Metálico",
			pt: "Ponte Metálica",
			it: "Metalponte",
			de: "Metallbrücke"
		},

		effect: {
			en: "All of your Pokémon that have {M} Energy attached have no Retreat Cost.",
			fr: "Vos Pokémon auxquels de l'Énergie {M} est attachée n'ont pas de Coût de Retraite.",
			es: "Ninguno de tus Pokémon que tenga alguna Energía {M} unida tiene Coste de Retirada.",
			pt: "Todos os seus Pokémon que têm Energia {M} ligada a eles não têm custo de Recuo.",
			it: "Tutti i tuoi Pokémon che hanno delle Energie {M} assegnate non hanno costo di ritirata.",
			de: "Alle deine Pokémon, an die {M}-Energie angelegt ist, haben keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Iron Blaster",
			fr: "Explose-Fer",
			es: "Explosión Férrea",
			pt: "Detonador de Ferro",
			it: "Esplodiferro",
			de: "Eisenblaster"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "Oswaldo KATO"
}

export default card