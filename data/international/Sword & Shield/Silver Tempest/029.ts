import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [663],
	set: Set,

	name: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard",
		'es-es': "Talonflame",
		'it-it': "Talonflame",
		'pt-br': "Talonflame",
		'de-de': "Fiaro"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Quick Dive",
			'fr-fr': "Plongeon Rapide",
			'es-es': "Picado Raudo",
			'it-it': "Immersione Veloce",
			'pt-br': "Mergulho Acelerado",
			'de-de': "Schnelltaucher"
		},

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Fire"],

		name: {
			'en-us': "Merciless Strike",
			'fr-fr': "Impact Impitoyable",
			'es-es': "Golpe Despiadado",
			'it-it': "Colpo Implacabile",
			'pt-br': "Golpe Impiedoso",
			'de-de': "Gnadenloser Schlag"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Talonflame mainly preys upon other bird Pokémon. To intimidate opponents, it sends embers spewing from gaps between its feathers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682071,
				tcgplayer: 451660
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682071,
				tcgplayer: 451660
			}
		},
	],
}

export default card
