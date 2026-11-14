import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Meowscarada ex",
		fr: "Miascarade-ex",
		de: "Maskagato-ex",
		es: "Meowscarada ex",
		it: "Meowscarada-ex",
		pt: "Meowscarada ex",
		'es-mx': "Meowscarada ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Magical Bullet",
			fr: "Projectile Magique",
			de: "Magisches Geschoss",
			es: "Bala Mágica",
			it: "Dardo Magico",
			pt: "Projétil Mágico",
			'es-mx': "Bala Mágica"
		},

		effect: {
			en: "This attack also does 120 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige aussi 120 dégâts à l'un des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 120 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque también hace 120 puntos de daño a uno de los Pokémon en Banca de tu rival que tengan algún contador de daño sobre ellos. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>",
			it: "Questo attacco infligge anche 120 danni a uno dei Pokémon nella panchina del tuo avversario che ha dei segnalini danno. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			pt: "Este ataque também causa 120 pontos de dano a 1 dos Pokémon no Banco do seu oponente que tem algum contador de dano nele. <em>(Não aplique Fraqueza e Resistência aos Pokémon no Banco.)</em>",
			'es-mx': "Este ataque también hace 120 puntos de daño a 1 de los Pokémon en Banca de tu rival que tengan algún contador de daño sobre ellos. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		damage: 120,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 726515,
				cardmarket: 918824
			}
		}
	],
}

export default card