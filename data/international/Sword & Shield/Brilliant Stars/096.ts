import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [306],
	set: Set,

	name: {
		'en-us': "Aggron V",
		'fr-fr': "Galeking V",
		'es-es': "Aggron V",
		'it-it': "Aggron V",
		'pt-br': "Aggron V",
		'de-de': "Stolloss V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Rock Slide",
			'fr-fr': "Éboulement",
			'es-es': "Avalancha",
			'it-it': "Frana",
			'pt-br': "Deslize de Pedras",
			'de-de': "Steinhagel"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 90
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Merciless Strike",
			'fr-fr': "Impact Impitoyable",
			'es-es': "Golpe Despiadado",
			'it-it': "Colpo Implacabile",
			'pt-br': "Golpe Impiedoso",
			'de-de': "Gnadenloser Schlag"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 150 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 150 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 150 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 150 pontos de dano a mais.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "150+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608642,
				tcgplayer: 263814
			}
		},
	],
}

export default card
