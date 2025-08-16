import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1003],
	set: Set,

	name: {
		en: "Ting-Lu",
		fr: "Dinglu",
		es: "Ting-Lu",
		it: "Ting-Lu",
		pt: "Ting-Lu",
		de: "Dinglu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Ground Crasher",
			fr: "Percuteur de Sol",
			es: "Demolición de Tierra",
			it: "Fracassaterra",
			pt: "Racha Chão",
			de: "Bodencrasher"
		},

		effect: {
			en: "If a Stadium is in play, this attack also does 30 damage to each of your opponent's Benched Pokémon, and discard that Stadium. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si un Stade est en jeu, cette attaque inflige aussi 30 dégâts à chacun des Pokémon de Banc de votre adversaire, et vous défaussez ce Stade. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Si hay un Estadio en juego, este ataque también hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival, y descartas ese Estadio. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Se c'è in gioco una carta Stadio, questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella panchina del tuo avversario e tu scarti quella carta Stadio. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Se um Estádio estiver em jogo, este ataque também causará 30 pontos de dano a cada um dos Pokémon no Banco do seu oponente, e descarte aquele Estádio. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke auch jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu, und du legst jene Stadionkarte auf den Ablagestapel. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 110
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Anesaki Dynamic"
}

export default card
