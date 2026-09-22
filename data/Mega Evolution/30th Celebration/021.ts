import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja ex",
		fr: "Amphinobi-ex",
		de: "Quajutsu-ex",
		es: "Greninja ex",
		it: "Greninja-ex",
		'es-mx': "Greninja ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [658],
	hp: 300,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Stealthy Slash",
			fr: "Tranche Furtive",
			de: "Tarnschlitzer",
			es: "Tajo Sigiloso",
			it: "Lacerazione Furtiva",
			'es-mx': "Cuchillada Sigilosa"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon for each damage counter on that Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque marqueur de dégâts sur ce Pokémon-là. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners für jede Schadensmarke auf jenem Pokémon 30 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival por cada contador de daño en ese Pokémon. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni segnalino danno presente su quel Pokémon. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			'es-mx': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival por cada contador de daño en ese Pokémon. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		cost: ["Water"]
	}, {
		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague",
			de: "Aquaschneide",
			es: "Filo Agua",
			it: "Acquataglio",
			'es-mx': "Filo Acuático"
		},

		damage: 160,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907628,
				tcgplayer: 696676
			}
		}
	],
}

export default card
