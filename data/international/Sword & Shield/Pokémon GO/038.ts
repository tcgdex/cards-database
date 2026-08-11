import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'es-es': "Larvitar",
		'it-it': "Larvitar",
		'pt-br': "Larvitar",
		'de-de': "Larvitar"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Crashing Bullet",
			'fr-fr': "Projectile Percutant",
			'es-es': "Bala Demoledora",
			'it-it': "Schiantadardo",
			'pt-br': "Projétil Estrondoso",
			'de-de': "Kugelhagel"
		},

		effect: {
			'en-us': "This attack also does 20 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a cada Pokémon en Banca (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a ciascun Pokémon in panchina, sia tuo che del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a cada um dos Pokémon no Banco (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Even sealed in its shell, it can move freely. Hard and fast, it has outstanding destructive power.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665668,
				tcgplayer: 276990
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665668,
				tcgplayer: 276990
			}
		},
	],
}

export default card
