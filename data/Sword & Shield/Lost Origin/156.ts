import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Damage Pump",
		fr: "Pompe à Dégâts",
		es: "Bomba de Daño",
		it: "Pompadanni",
		pt: "Bomba de Dano",
		de: "Schadenspumpe"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Move up to 2 damage counters from 1 of your Pokémon to your other Pokémon in any way you like.",
		fr: "Déplacez jusqu'à 2 marqueurs de dégâts de l'un de vos Pokémon vers vos autres Pokémon comme il vous plaît.",
		es: "Mueve hasta 2 contadores de daño de 1 de tus Pokémon a tus otros Pokémon de la manera que desees.",
		it: "Sposta fino a due segnalini danno da uno dei tuoi Pokémon ai tuoi altri Pokémon nel modo che preferisci.",
		pt: "Mova até 2 contadores de dano de 1 dos seus Pokémon para outros Pokémon seus como desejar.",
		de: "Verschiebe bis zu 2 Schadensmarken von 1 deiner Pokémon beliebig auf deine anderen Pokémon."
	},

	trainerType: "Item",
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card