import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [626],
	set: Set,

	name: {
		en: "Bouffalant",
		fr: "Frison",
		es: "Bouffalant",
		it: "Bouffalant",
		pt: "Bouffalant",
		de: "Bisofank"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Lost Headbutt",
			fr: "Coup d'Boule Perdu",
			es: "Testarazo Perdido",
			it: "Bottintesta Perduto",
			pt: "Cabeçada Perdida",
			de: "Nirgendwo-Kopfstoß"
		},

		effect: {
			en: "Put an Energy attached to your opponent's Active Pokémon in the Lost Zone.",
			fr: "Placez une Énergie attachée au Pokémon Actif de votre adversaire dans la Zone Perdue.",
			es: "Pon 1 Energía unida al Pokémon Activo de tu rival en la Zona Perdida.",
			it: "Prendi un'Energia assegnata al Pokémon attivo del tuo avversario e mettila nell'area perduta.",
			pt: "Coloque 1 Energia ligada ao Pokémon Ativo do seu oponente na Zona Perdida.",
			de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie ins Nirgendwo."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Superpowered Horns",
			fr: "Cornes Surpuissantes",
			es: "Cuernos Superpoderosos",
			it: "Corna Superpotenziate",
			pt: "Chifres Superpoderosos",
			de: "Superstarke Hörner"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674157
	}
}

export default card