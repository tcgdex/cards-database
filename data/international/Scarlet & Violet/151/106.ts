import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [106],
	set: Set,

	name: {
		'fr-fr': "Kicklee",
		'en-us': "Hitmonlee",
		'es-es': "Hitmonlee",
		'it-it': "Hitmonlee",
		'pt-br': "Hitmonlee",
		'de-de': "Kicklee"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Coup de Pied Tournoyant",
			'en-us': "Twister Kick",
			'es-es': "Patada Torbellino",
			'it-it': "Calciociclone",
			'pt-br': "Chute Twister",
			'de-de': "Orkankick"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Switch this Pokémon with 1 of your Benched Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.) Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'fr-fr': "Balayage",
			'en-us': "Low Kick",
			'es-es': "Patada Baja",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'de-de': "Fußkick"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "The legs freely contract and stretch. The stretchy legs allow it to hit a distant foe with a rising kick.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733701,
				tcgplayer: 516675,
				cardtrader: 261184
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733701,
				tcgplayer: 516675,
				cardtrader: 261184
			}
		},
	],

	illustrator: "Hitoshi Ariga",

	
}

export default card
