import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'es-es': "Gloom",
		'es-mx': "Gloom",
		'de-de': "Duflor",
		'it-it': "Gloom",
		'pt-br': "Gloom"
	},

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
		'es-es': "Oddish",
		'es-mx': "Oddish",
		'de-de': "Myrapla",
		'it-it': "Oddish",
		'pt-br': "Oddish",
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [44],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Disperse Drool",
			'fr-fr': "Bave Dispersée",
			'es-es': "Salivazo Disperso",
			'es-mx': "Dispersaliva",
			'de-de': "Sabberspeier",
			'it-it': "Spargibava",
			'pt-br': "Baba Espalhada"
		},

		effect: {
			'en-us': "This attack also does 20 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a cada Pokémon en Banca (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 20 puntos de daño a cada Pokémon en Banca (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 20 danni a ogni Pokémon in panchina, sia tuo che del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a cada Pokémon no Banco (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I", 

	description: {
		'en-us': "The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey.",
	},

	illustrator: "Yoriyuki Ikegami",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857577,
				tcgplayer: 662164,
				cardtrader: 356786
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857577,
				tcgplayer: 662164,
				cardtrader: 356786
			}
		},
	],
}

export default card
