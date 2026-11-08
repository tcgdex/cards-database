import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [469],
	set: Set,

	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
		'es-es': "Yanmega",
		'it-it': "Yanmega",
		'pt-br': "Yanmega",
		'de-de': "Yanmega"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma",
		'de-de': "Yanma"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Shoot Through",
			'fr-fr': "Passer à Travers",
			'es-es': "Cruzar Rápido",
			'it-it': "Sparainmezzo",
			'pt-br': "Tiro Vazante",
			'de-de': "Durchschießen"
		},

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 20
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Jet Wing",
			'fr-fr': "Aile Jet",
			'es-es': "Ala Propulsión",
			'it-it': "Ala Jet",
			'pt-br': "Asa a Jato",
			'de-de': "Jet-Flügel"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691726,
				tcgplayer: 478055
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691726,
				tcgplayer: 478055
			}
		},
	],
}

export default card
