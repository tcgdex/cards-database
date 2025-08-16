import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [844],
	set: Set,

	name: {
		en: "Sandaconda V",
		fr: "Dunaconda V",
		es: "Sandaconda V",
		it: "Sandaconda V",
		pt: "Sandaconda V",
		de: "Sanaconda V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wall of Sand",
			fr: "Muraille de Sable",
			de: "Sandfeste",
			es: "Muro de Arena",
			pt: "Muralha de Areia",
			it: "Murosabbia"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Land Crush",
			fr: "Écras'Terre",
			de: "Schollenbrecher",
			es: "Aterrizaje",
			pt: "Aperto de Terra",
			it: "Schiacciaterra"
		},

		damage: 140
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582988,
		tcgplayer: 253149
	}
}

export default card