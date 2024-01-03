import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Brute Bonnet",
		fr: "Fongus-Furie",
		es: "Furioseta",
		it: "Fungofurioso",
		pt: "Capuz Bruto",
		de: "Wutpilz"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Toxic Powder",
			fr: "Poudre Toxique",
			es: "Polvareda Tóxica",
			it: "Pulvitossina",
			pt: "Pó Tóxico",
			de: "Giftiger Puder"
		},

		effect: {
			en: "Once during your turn, if this Pokémon has an Ancient Booster Energy Capsule attached, you may make both Active Pokémon Poisoned.",
			fr: "Une fois pendant votre tour, si Capsule Énergie Booster Temps Passé est attachée à ce Pokémon, vous pouvez laisser les deux Pokémon Actifs Empoisonnés.",
			es: "Una vez durante tu turno, si este Pokémon tiene un Tanque de Energía Potenciadora del Pasado unido, puedes dejar a ambos Pokémon Activos Envenenados.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon ha una Capsula energetica Tempo Passato assegnata, puoi lasciare entrambi i Pokémon attivi avvelenati.",
			pt: "Uma vez durante o seu turno, se este Pokémon tiver uma Cápsula Energética de Melhoria Ancestral ligada a ele, você poderá deixar ambos os Pokémon Ativos Envenenados.",
			de: "Einmal während deines Zuges, wenn an dieses Pokémon 1 Energiekapsel aus der Vergangenheit angelegt ist, kannst du beide Aktiven Pokémon vergiften."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Rampaging Hammer",
			fr: "Marteau Furieux",
			es: "Martillazo Furioso",
			it: "Martello Infuriato",
			pt: "Martelo Furioso",
			de: "Tobender Hammer"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card