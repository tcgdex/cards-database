import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko V",
		fr: "Tokorico V",
		es: "Tapu Koko V",
		it: "Tapu Koko V",
		pt: "Tapu Koko V",
		de: "Kapu-Riki V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Bola Elétrica",
			de: "Elektroball"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Spiral Thunder",
			fr: "Tonnerre en Spirale",
			es: "Trueno en Espiral",
			it: "Tuonospirale",
			pt: "Relâmpago Espiral",
			de: "Spiraldonner"
		},

		effect: {
			en: "This attack does 40 more damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía unida a todos los Pokémon de tu rival.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia assegnata ai Pokémon del tuo avversario.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia ligada a todos os Pokémon do seu oponente.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 40 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
