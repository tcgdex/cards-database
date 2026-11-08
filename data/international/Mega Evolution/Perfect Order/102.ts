import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [121],

	name: {
		'en-us': "Mega Starmie ex",
		'fr-fr': "Méga-Staross-ex",
		'es-es': "Mega-Starmie ex",
		'es-mx': "Mega-Starmie ex",
		'de-de': "Mega-Starmie-ex",
		'it-it': "Mega Starmie-ex",
		'pt-br': "Mega Starmie ex"
	},
	evolveFrom: {
		'en-us': "Staryu",
		'de-de': "Sterndu",
		'es-es': "Staryu",
		'fr-fr': "Stari",
		'it-it': "Staryu",
		'pt-br': "Staryu",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Jetting Blow",
			'fr-fr': "Coup Éclaboussant",
			'es-es': "Golpe Propulsión",
			'es-mx': "Golpe Jet",
			'de-de': "Wasserschwall",
			'it-it': "Colpogetto",
			'pt-br': "Golpe a Jato"
		},

		effect: {
			'en-us': "This attack also does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 120
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Nebula Beam",
			'fr-fr': "Rayon Nébuleux",
			'es-es': "Rayo Nebulosa",
			'es-mx': "Rayo Nebular",
			'de-de': "Nebelstrahl",
			'it-it': "Nebularaggio",
			'pt-br': "Feixe Celestial"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en el Pokémon Activo de tu rival.",
			'es-mx': "El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en el Pokémon Activo de tu rival.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche oder Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente."
		},

		damage: 210
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684361,
				cardmarket: 877519
			}
		}
	],

}

export default card
