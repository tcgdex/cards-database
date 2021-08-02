import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Bouffalant",
		fr: "Frison",
		es: "Bouffalant",
		it: "Bouffalant",
		pt: "Bouffalant",
		de: "Bisofank"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Sap Sipper",
			fr: "Herbivore",
			es: "Herbívoro",
			it: "Mangiaerba",
			pt: "Engolidor de Seiva",
			de: "Vegetarier"
		},

		effect: {
			en: "This Pokémon’s attacks do 60 more damage to your opponent’s Grass Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de ce Pokémon infligent 60 dégâts supplémentaires aux Pokémon Grass de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques de este Pokémon hacen 60 puntos de daño más a los Pokémon Grass de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi di questo Pokémon infliggono 60 danni in più ai Pokémon Grass del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques deste Pokémon causam 60 pontos de dano a mais aos Pokémon Grass do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Die Attacken dieses Pokémon fügen den Grass-Pokémon deines Gegners 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			en: "Head Charge",
			fr: "Peignée",
			es: "Ariete",
			it: "Ricciolata",
			pt: "Ataque de Cabeça",
			de: "Steinschädel"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card