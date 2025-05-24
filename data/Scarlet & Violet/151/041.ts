import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		fr: "Nosferapti",
		en: "Zubat",
		es: "Zubat",
		it: "Zubat",
		pt: "Zubat",
		de: "Zubat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Écho Révélateur",
			en: "Revealing Echo",
			es: "Eco Revelador",
			it: "Svelaeco",
			pt: "Eco Revelador",
			de: "Aufdeckendes Echo"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez demander à votre adversaire de montrer sa main.",
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may have your opponent reveal their hand.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes hacer que tu rival enseñe las cartas de su mano.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi far mostrare al tuo avversario le carte che ha in mano.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá fazer com que o seu oponente revele a mão dele.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Morsure",
			en: "Bite",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Scav"
}

export default card