import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [763],
	set: Set,

	name: {
		fr: "Sucreine",
		en: "Tsareena",
		es: "Tsareena",
		it: "Tsareena",
		pt: "Tsareena",
		de: "Fruyal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Talon Royal",
			en: "Queenly Heel",
			es: "Talón de Reina",
			it: "Tallone della Regina",
			pt: "Salto Régio",
			de: "Majestätische Ferse"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, aucun Pokémon ne peut être joué de la main de votre adversaire sur le Pokémon Défenseur pour le faire évoluer.",
			en: "During your opponent's next turn, Pokémon can't be played from your opponent's hand to evolve the Defending Pokémon.",
			es: "Durante el próximo turno de tu rival, no se pueden jugar Pokémon de la mano de tu rival para hacer evolucionar al Pokémon Defensor.",
			it: "Durante il prossimo turno del tuo avversario, nessun Pokémon può essere giocato dalla mano del tuo avversario per far evolvere il Pokémon difensore.",
			pt: "Durante o próximo turno do seu oponente, Pokémon não poderão ser jogados da mão do seu oponente para evoluir o Pokémon Defensor.",
			de: "Während des nächsten Zuges deines Gegners können keine Pokémon aus der Hand deines Gegners gespielt werden, um das Verteidigende Pokémon zu entwickeln."
		},

		damage: 60
	}, {
		cost: ["Grass", "Grass"],

		name: {
			fr: "Coup Tournant",
			en: "Spinning Kick",
			es: "Patada Giratoria",
			it: "Calcio Rotante",
			pt: "Chute Giratório",
			de: "Wirbelkick"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			en: "This Pokémon also does 20 damage to itself.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Steenee",
		fr: "Candine",
		es: "Steenee",
		it: "Steenee",
		pt: "Steenee",
		de: "Frubaila"
	}
}

export default card