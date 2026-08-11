import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [549],
	set: Set,

	name: {
		'en-us': "Hisuian Lilligant",
		'fr-fr': "Fragilady de Hisui",
		'es-es': "Lilligant de Hisui",
		'it-it': "Lilligant di Hisui",
		'pt-br': "Lilligant de Hisui",
		'de-de': "Hisui-Dressella"
	},

	illustrator: "Mizue",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'de-de': "Lilminip"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Twister Lutz",
			'fr-fr': "Lutz Tournoyant",
			'es-es': "Tornado Lutz",
			'it-it': "Lutz Tornado",
			'pt-br': "Tornado Rodopiante",
			'de-de': "Lutzwirbel"
		},

		effect: {
			'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Leaf Step",
			'fr-fr': "Enjambée de Feuillage",
			'es-es': "Paso Hoja",
			'it-it': "Passofoglia",
			'pt-br': "Passo de Folha",
			'de-de': "Blattschritt"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "I suspect that its well-developed legs are the result of a life spent on mountains covered in deep snow. The scent it exudes from its flower crown heartens those in proximity.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658510,
				tcgplayer: 272216
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658510,
				tcgplayer: 272216
			}
		},
	],
}

export default card
