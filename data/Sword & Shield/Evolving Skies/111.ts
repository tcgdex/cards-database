import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Rayquaza VMAX",
		fr: "Rayquaza VMAX",
		es: "Rayquaza VMAX",
		it: "Rayquaza VMAX",
		pt: "Rayquaza VMAX",
		de: "Rayquaza VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	illustrator: "PLANETA Mochizuki",

	abilities: [{
		type: "Ability",

		name: {
			en: "Azure Pulse",
			fr: "Pouls Azur",
			es: "Pulso Celeste",
			pt: "Azure Pulse",
			it: "Azzurropulsar",
			de: "Azurpuls"
		},

		effect: {
			en: "Once during your turn, you may discard your hand and draw 3 cards.",
			fr: "Une fois pendant votre tour, vous pouvez défausser votre main et piocher 3 cartes.",
			es: "Una vez durante tu turno, puedes descartar las cartas de tu mano y robar 3 cartas.",
			pt: "Once during your turn, you may discard your hand and draw 3 cards.",
			it: "Una sola volta durante il tuo turno, puoi scartare le carte che hai in mano e pescare tre carte.",
			de: "Einmal während deines Zuges kannst du deine Handkarten auf deinen Ablagestapel legen und 3 Karten ziehen."
		}
	}],

	attacks: [{
		name: {
			en: "Max Burst",
			fr: "Détonomax",
			es: "Maxiexplosivo",
			it: "Dynascoppio",
			pt: "Max Burst",
			de: "Dyna-Detonation"
		},

		effect: {
			en: "You may discard any amount of basic Fire Energy or any amount of basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser autant d'Énergies Fire de base ou autant d'Énergies Lightning de base que vous le voulez de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar cualquier cantidad de Energías Fire Básicas o cualquier cantidad de Energías Lightning Básicas de este Pokémon. Este ataque hace 80 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare tutte le Energie base Fire o tutte le Energie base Lightning che vuoi da questo Pokémon. Questo attacco infligge 80 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "You may discard any amount of basic Fire Energy or any amount of basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			de: "Du kannst beliebig viele Basis-Fire-Energien oder beliebig viele Basis-Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 80 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Fire", "Lightning"]
	}],

	retreat: 2,
	stage: "VMAX",
	dexId: [384],

	evolveFrom: {
		en: "Rayquaza V",
		fr: "Rayquaza-V",
		es: "Rayquaza V",
		it: "Rayquaza-V",
		pt: "Rayquaza V",
		de: "Rayquaza-V"
	},

	regulationMark: "E",

}

export default card
