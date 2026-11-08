import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [382],
	set: Set,

	name: {
		'en-us': "Kyogre V",
		'fr-fr': "Kyogre V",
		'es-es': "Kyogre V",
		'it-it': "Kyogre V",
		'pt-br': "Kyogre V",
		'de-de': "Kyogre V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Dual Splash",
			'fr-fr': "Double Splash",
			'es-es': "Doble Salpicadura",
			'it-it': "Doppiosplash",
			'pt-br': "Esguicho Duplo",
			'de-de': "Doppelplatscher"
		},

		effect: {
			'en-us': "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Aqua Typhoon",
			'fr-fr': "Typhon Aquatique",
			'es-es': "Tifón Aqua",
			'it-it': "Idrotifone",
			'pt-br': "Tufão Aquático",
			'de-de': "Aquataifun"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Aqua Typhoon.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Typhon Aquatique.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Tifón Aqua.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Idrotifone.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Tufão Aquático.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Aquataifun nicht einsetzen."
		},

		damage: 210
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691754,
				tcgplayer: 477053
			}
		},
	],
}

export default card
