import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Dunaconda V",
		en: "Sandaconda V",
		es: "Sandaconda V",
		it: "Sandaconda V",
		pt: "Sandaconda V",
		de: "Sanaconda V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Muraille de Sable",
			en: "Wall of Sand",
			es: "Muro de Arena",
			it: "Murosabbia",
			pt: "Muralha de Areia",
			de: "Sandfeste"
		},

		effect: {
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			fr: "Écras'Terre",
			en: "Land Crush",
			es: "Aterrizaje",
			it: "Schiacciaterra",
			pt: "Aperto de Terra",
			de: "Schollenbrecher"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 567197
	}
}

export default card
