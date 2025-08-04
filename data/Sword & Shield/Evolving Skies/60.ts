import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Regieleki",
		fr: "Regieleki",
		es: "Regieleki",
		it: "Regieleki",
		pt: "Regieleki",
		de: "Regieleki"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Shin Nagasawa",

	attacks: [{
		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			es: "Impacto Estático",
			it: "Shock Statico",
			pt: "Static Shock",
			de: "Statischer Schock"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Teraspark",
			fr: "Téra-Étincelle",
			es: "Terachispa",
			it: "Terascintilla",
			pt: "Teraspark",
			de: "Terafunke"
		},

		effect: {
			en: "Discard all Lightning Energy from this Pokémon. This attack also does 40 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toute l'Énergie Lightning de ce Pokémon. Cette attaque inflige aussi 40 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta todas las Energías Lightning de este Pokémon. Este ataque también hace 40 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta tutte le Energie Lightning da questo Pokémon. Questo attacco infligge anche 40 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Discard all Lightning Energy from this Pokémon. This attack also does 40 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			de: "Lege alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "Its entire body is made up of a single organ that generates electrical energy. Regieleki is capable of creating all Galar's electricity."
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 574084,
		tcgplayer: 246902
	}
}

export default card
