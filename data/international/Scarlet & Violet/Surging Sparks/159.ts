import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [967],
	set: Set,

	name: {
		'en-us': "Cyclizar ex",
		'fr-fr': "Motorizard-ex",
		'es-es': "Cyclizar ex",
		'it-it': "Cyclizar-ex",
		'pt-br': "Cyclizar ex",
		'de-de': "Mopex-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Break Through",
			'fr-fr': "Percée",
			'es-es': "Abrir Paso",
			'it-it': "Irruzione",
			'pt-br': "Atravessar",
			'de-de': "Eine Bresche schlagen"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 130
	}, {
		cost: ["Grass", "Fire", "Psychic"],

		name: {
			'en-us': "Zircon Road",
			'fr-fr': "Route Zircon",
			'es-es': "Camino de Zircones",
			'it-it': "Strada di Zircone",
			'pt-br': "Via de Zircão",
			'de-de': "Zirkon-Strecke"
		},

		effect: {
			'en-us': "You may draw 5 cards.",
			'fr-fr': "Vous pouvez piocher 5 cartes.",
			'es-es': "Puedes robar 5 cartas.",
			'it-it': "Puoi pescare cinque carte.",
			'pt-br': "Você pode comprar 5 cartas.",
			'de-de': "Du kannst 5 Karten ziehen."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794532,
				tcgplayer: 589910
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card
