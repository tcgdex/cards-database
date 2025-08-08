import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [899],
	set: Set,

	name: {
		en: "Wyrdeer V",
		fr: "Cerbyllin V",
		es: "Wyrdeer V",
		it: "Wyrdeer V",
		pt: "Wyrdeer V",
		de: "Damythir V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Frontier Road",
			fr: "Route Frontalière",
			es: "Camino Fronterizo",
			it: "Strada di Frontiera",
			pt: "Estrada Fronteiriça",
			de: "Vorreiter"
		},

		effect: {
			en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may move any amount of Energy from your other Pokémon to it.",
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez déplacer autant d'Énergies que vous le voulez de vos autres Pokémon vers celui-ci.",
			es: "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes mover cualquier cantidad de Energías de tus otros Pokémon a este Pokémon.",
			it: "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi spostare un numero qualsiasi di Energie dai tuoi altri Pokémon su questo Pokémon.",
			pt: "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá mover qualquer quantidade de Energia dos seus outros Pokémon para este Pokémon.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du beliebig viele Energien von deinen anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Psyshield Bash",
			fr: "Sprint Bouclier",
			es: "Asalto Barrera",
			it: "Barrierassalto",
			pt: "Pancada de Escudo Psíquico",
			de: "Barrierenstoß"
		},

		effect: {
			en: "This attack does 40 damage for each Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts pour chaque Énergie attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño por cada Energía unida a este Pokémon.",
			it: "Questo attacco infligge 40 danni per ogni Energia assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano para cada Energia ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 40 Schadenspunkte zu."
		},

		damage: "40×"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
