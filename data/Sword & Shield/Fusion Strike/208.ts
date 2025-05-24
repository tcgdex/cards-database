import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [234],
	set: Set,

	name: {
		en: "Stantler",
		fr: "Cerfrousse",
		es: "Stantler",
		it: "Stantler",
		pt: "Stantler",
		de: "Damhirplex"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		en: "The curved antlers subtly change the flow of air to create a strange space where reality is distorted."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			de: "Rückwärtskick",
			es: "Patada Trasera",
			pt: "Chute Traseiro",
			it: "Retrocalcio"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wild Dive",
			fr: "Piqué Fou",
			de: "Wilder Sturzflug",
			es: "Picado Salvaje",
			pt: "Mergulho Selvagem",
			it: "Picchiata Irrefrenabile"
		},

		damage: "30×",

		effect: {
			en: "This attack does 30 damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte zu.",
			es: "Este ataque hace 30 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
			pt: "Este ataque causa 30 pontos de dano para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			it: "Questo attacco infligge 30 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card