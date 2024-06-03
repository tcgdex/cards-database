import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Abra",
		fr: "Abra",
		es: "Abra",
		it: "Abra",
		pt: "Abra",
		de: "Abra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Teleporter",
			fr: "Téléporteur",
			es: "Teletransportador",
			it: "Teletrasportatore",
			pt: "Teletransportar",
			de: "Teleporter"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may shuffle it and all attached cards into your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez le mélanger avec votre deck, ainsi que toutes les cartes qui lui sont attachées.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi rimischiarlo nel tuo mazzo insieme a tutte le carte a esso assegnate.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá embaralhá-lo e todas as cartas ligadas a ele no seu baralho.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du es und alle angelegten Karten in dein Deck mischen."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Beam",
			fr: "Rayon",
			es: "Transmisión",
			it: "Raggio",
			pt: "Feixe",
			de: "Strahl"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card