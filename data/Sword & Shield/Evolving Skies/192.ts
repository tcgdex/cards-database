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
		en: "Dragonite V",
		fr: "Dracolosse V",
		es: "Dragonite V",
		it: "Dragonite V",
		pt: "Dragonite V",
		de: "Dragoran V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Atsushi Furusawa",

	attacks: [{
		name: {
			en: "Shred",
			fr: "Déchiquetage",
			es: "Hacer Trizas",
			it: "Tritatutto",
			pt: "Shred",
			de: "Zerfetzer"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Dragon Gale",
			fr: "Bourrasque Draconique",
			es: "Vendaval de Dragón",
			it: "Dragoraffica",
			pt: "Dragon Gale",
			de: "Drachensturm"
		},

		effect: {
			en: "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 250,
		cost: ["Water", "Water", "Lightning"]
	}],

	retreat: 3,
	dexId: [149],
	regulationMark: "E",
	suffix: "V"
}

export default card
