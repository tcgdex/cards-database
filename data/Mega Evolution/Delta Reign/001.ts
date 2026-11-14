import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Heracross",
		fr: "Scarhino",
		de: "Skaraborn",
		es: "Heracross",
		it: "Heracross",
		pt: "Heracross",
		'es-mx': "Heracross"
	},

	illustrator: "Satoshi Ito",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Spike Draw",
			fr: "Pique-Pioche",
			de: "Stachelzug",
			es: "Robo Pico",
			it: "Battipesca",
			pt: "Comprada Espinhosa",
			'es-mx': "Robo Punzante"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			de: "Ziehe 2 Karten.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			'es-mx': "Roba 2 cartas."
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			en: "High Horsepower",
			fr: "Cavalerie Lourde",
			de: "Pferdestärke",
			es: "Fuerza Equina",
			it: "Forza Equina",
			pt: "Potência Equina",
			'es-mx': "Fuerza Equina"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 727563,
				cardmarket: 918810
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 727563,
				cardmarket: 918810
			}
		}
	],
}

export default card