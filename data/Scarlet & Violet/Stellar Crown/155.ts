import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Archaludon",
		fr: "Pondralugon",
		es: "Archaludon",
		it: "Archaludon",
		pt: "Archaludon",
		de: "Briduradon"
	},

	rarity: "Illustration rare",
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
			it: "Metalponte",
			pt: "Ponte Metálica",
			de: "Metallbrücke"
		},

		effect: {
			en: "All of your Pokémon that have Metal Energy attached have no Retreat Cost.",
			fr: "Vos Pokémon auxquels de l'Énergie Metal est attachée n'ont pas de Coût de Retraite.",
			es: "Ninguno de tus Pokémon que tenga alguna Energía Metal unida tiene Coste de Retirada.",
			it: "Tutti i tuoi Pokémon che hanno delle Energie Metal assegnate non hanno costo di ritirata.",
			pt: "Todos os seus Pokémon que têm Energia Metal ligada a eles não têm custo de Recuo.",
			de: "Alle deine Pokémon, an die Metal-Energie angelegt ist, haben keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Iron Blaster",
			fr: "Explose-Fer",
			es: "Explosión Férrea",
			it: "Esplodiferro",
			pt: "Detonador de Ferro",
			de: "Eisenblaster"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card