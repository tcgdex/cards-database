import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	dexId: [249],

	name: {
		en: "Lugia",
		fr: "Lugia",
		de: "Lugia",
		es: "Lugia",
		it: "Lugia",
		pt: "Lugia",
		'es-mx': "Lugia"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Psychic",
			fr: "Psyko",
			de: "Psycho",
			es: "Psíquico",
			it: "Psichico",
			pt: "Psíquico",
			'es-mx': "Fuerza Psíquica"
		},

		effect: {
			en: "This attack does 10 damage times the number of Energy cards attached to the Defending Pokémon.",
			fr: "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées au Pokémon Défenseur.",
			de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an Energiekarten, die an das Verteidigende Pokémon angelegt sind, zu.",
			es: "Hace 10 puntos de daño multiplicado por la cantidad de cartas de Energía unidas al Pokémon a la defensa.",
			it: "Questo attacco infligge 10 danni per ogni carta Energia assegnata al Pokémon Difensore.",
			pt: "Este ataque causa 10 de dano vezes o número de cards de Energia ligados ao Pokémon Defensor.",
			'es-mx': "Hace 10 puntos de daño multiplicado por la cantidad de cartas de Energía unidas al Pokémon a la defensa."
		},

		damage: "10×",
		cost: ["Fire", "Psychic"]
	}, {
		name: {
			en: "Steam Blast",
			fr: "Coud' vapeur",
			de: "Dampfstrahl",
			es: "Explosión Vapor",
			it: "Sbuffo di Vapore",
			pt: "Explosão de Vapor",
			'es-mx': "Explosión de Vapor"
		},

		effect: {
			en: "Discard an Energy card attached to Lugia.",
			fr: "Défaussez-vous d'une carte Énergie attachée à Lugia.",
			de: "Lege 1 an Lugia angelegte Energiekarte auf deinen Ablagestapel.",
			es: "Descarta 1 carta de Energía unida a Lugia.",
			it: "Scarta una carta Energia assegnata a Lugia.",
			pt: "Descarte um card de Energia ligado a Lugia.",
			'es-mx': "Descarta 1 carta de Energía unida a Lugia."
		},

		damage: 50,
		cost: ["Fire", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907945,
				tcgplayer: 714386
			}
		}
	],
}

export default card