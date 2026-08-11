import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [964],
	set: Set,

	name: {
		'en-us': "Palafin",
		'fr-fr': "Superdofin",
		'es-es': "Palafin",
		'it-it': "Palafin",
		'pt-br': "Palafin",
		'de-de': "Delfinator"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Finizen",
		'fr-fr': "Dofin",
		'es-es': "Finizen",
		'it-it': "Finizen",
		'pt-br': "Finizen",
		'de-de': "Normifin"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Jet Punch",
			'fr-fr': "Poing Sonique",
			'es-es': "Puño Jet",
			'it-it': "Pugnojet",
			'pt-br': "Soco Jato",
			'de-de': "Düsenhieb"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 30
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Justice Kick",
			'fr-fr': "Coup Juste",
			'es-es': "Patada Justiciera",
			'it-it': "Calcio Eroico",
			'pt-br': "Chute Justiceiro",
			'de-de': "Gerechtigkeitskick"
		},

		effect: {
			'en-us': "If this Pokémon didn't move from the Bench to the Active Spot this turn, this attack does nothing.",
			'fr-fr': "Si ce Pokémon n'a pas été déplacé du Banc vers le Poste Actif pendant ce tour, cette attaque ne fait rien.",
			'es-es': "Si este Pokémon no se ha movido de la Banca al Puesto Activo en este turno, este ataque no hace nada.",
			'it-it': "Se questo Pokémon non si è spostato dalla panchina in posizione attiva nel turno in corso, questo attacco non ha effetto.",
			'pt-br': "Se este Pokémon não foi movido do Banco para o Campo Ativo durante este turno, este ataque não fará nada.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges nicht von deiner Bank in die Aktive Position gewechselt ist, hat diese Attacke keine Auswirkungen."
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
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751663,
				tcgplayer: 534515,
				cardtrader: 274308
			}
		},
	],

	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "This Pokémon's ancient genes have awakened. It is now so extraordinarily strong that it can easily lift a cruise ship with one fin.",
	},

}

export default card
