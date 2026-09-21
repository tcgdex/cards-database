import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Dark Tyranitar",
		fr: "Tyranocif obscur",
		de: "Dunkles Despotar",
		es: "Tyranitar Oscuro",
		it: "Dark Tyranitar",
		pt: "Tyranitar Sombrio",
		'es-mx': "Tyranitar Oscuro"
	},

	illustrator: "Nakaoka",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Grind",
			fr: "Écrase",
			de: "Zermalmer",
			es: "Moler",
			it: "Spremuta",
			pt: "Moer",
			'es-mx': "Moler"
		},

		effect: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to Dark Tyranitar.",
			fr: "Inflige 10 dégâts plus 10 supplémentaires pour chaque Énergie attachée à Tyranocif obscur.",
			de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Dunkles Despotar angelegte Energie zu.",
			es: "Hace 10 puntos de daño más otros 10 puntos de daño adicionales por cada Energía unida a Tyranitar Oscuro.",
			it: "Infligge 10 danni più altri 10 danni per ogni Energia assegnata a Dark Tyranitar.",
			pt: "Causa 10 de dano mais 10 de dano adicionais para cada Energia ligada ao Tyranitar Sombrio.",
			'es-mx': "Hace 10 puntos de daño más otros 10 puntos de daño adicionales por cada Energía unida a Tyranitar Oscuro."
		},

		damage: "10+",
		cost: ["Colorless"]
	}, {
		name: {
			en: "Spinning Tail",
			fr: "Queue tournante",
			de: "Kreisender Schweif",
			es: "Cola giratoria",
			it: "Coda Rotante",
			pt: "Cauda Giratória",
			'es-mx': "Cola giratoria"
		},

		effect: {
			en: "Does 20 damage to each of your opponent's Pokémon. <em>	   (Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Inflige 20 dégâts à chacun des Pokémon de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Hace 20 puntos de daño a los Pokémon de tu oponente. <em>(No apliques Debilidad y Resistencia para los Pokémon en la Banca.)</em>",
			it: "Infligge 20 danni a ogni Pokémon del tuo avversario. <em>(Non applicare Debolezza e Resistenza ai Pokémon in Panchina.)</em>",
			pt: "Causa 20 de dano a cada um dos Pokémon do seu oponente. <em>(Fraqueza e Resistência não são aplicadas para Pokémon no Banco.)</em>",
			'es-mx': "Hace 20 puntos de daño a los Pokémon de tu oponente. <em>(No apliques Debilidad y Resistencia para los Pokémon en la Banca.)</em>"
		},

		cost: ["Darkness", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Bite Off",
			fr: "Arracher d'un coup de dent",
			de: "Abbeißen",
			es: "Despedazar",
			it: "Addentare",
			pt: "Mordida Estraçalhante",
			'es-mx': "Mordida desgarradora"
		},

		effect: {
			en: "If the Defending Pokémon is Pokémon-<em>ex</em>, this attack does 70 damage plus 50 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon-<em>ex</em>, cette attaque inflige 70 dégâts plus 50 dégâts supplémentaires.",
			de: "Falls das verteidigende Pokémon ein Pokémon-<em>ex</em> ist, fügt dieser Angriff 70 Schadenspunkte plus 50 weitere Schadenspunkte zu.",
			es: "Si el Pokémon defensor es un Pokémon-<em>ex</em>, este ataque hace 70 puntos de daño más 50 puntos de daño adicional.",
			it: "Se il Pokémon Difensore è un Pokémon-<em>ex</em>, questo attacco infligge 70 danni più altri 50 danni.",
			pt: "Se o Pokémon Defensor for um Pokémon-<em>ex</em>, este ataque causa 70 de dano mais 50 de dano adicionais.",
			'es-mx': "Si el Pokémon defensor es un Pokémon-<em>ex</em>, este ataque hace 70 puntos de daño más 50 puntos de daño adicional."
		},

		damage: "70+",
		cost: ["Darkness", "Darkness", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-30"
	}],

	retreat: 2,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907947,
				tcgplayer: 716160
			}
		}
	],
}

export default card