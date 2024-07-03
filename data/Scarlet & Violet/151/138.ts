import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [138],
	set: Set,

	name: {
		fr: "Amonita",
		en: "Omanyte",
		es: "Omanyte",
		it: "Omanyte",
		pt: "Omanyte",
		de: "Amonitas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Retour Tentaculaire",
			en: "Tentacular Return",
			es: "Retorno Tentacular",
			it: "Ritorno Tentacolare",
			pt: "Retorno Tentacular",
			de: "Tentakelrückkehr"
		},

		effect: {
			fr: "Ajoutez à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			en: "Put an Energy attached to your opponent's Active Pokémon into their hand.",
			es: "Pon 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			it: "Prendi un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungila alle carte che ha in mano.",
			pt: "Coloque uma Energia ligada ao Pokémon Ativo do seu oponente na mão dele.",
			de: "Gib deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card