import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Azumarill ex",
		fr: "Azumarill-ex",
		es: "Azumarill ex",
		'es-mx': "Azumarill ex",
		de: "Azumarill-ex",
		it: "Azumarill-ex",
		pt: "Azumarill ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Bubble Gathering",
			fr: "Rassemblement de Bulles",
			es: "Acopio de Burbujas",
			'es-mx': "Recolección de Burbujas",
			de: "Blasensammler",
			it: "Raccoglibolle",
			pt: "Buscar Bolhas"
		},

		effect: {
			en: "As often as you like during your turn, you may use this Ability. Move an Energy from 1 of your other Pokémon to this Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez utiliser ce talent. Déplacez une Énergie de l'un de vos autres Pokémon vers ce Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes usar esta habilidad. Mueve 1 Energía de uno de tus otros Pokémon a este Pokémon.",
			'es-mx': "Cuantas veces quieras durante tu turno, puedes usar esta Habilidad. Mueve 1 Energía de 1 de tus otros Pokémon a este Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du diese Fähigkeit einsetzen. Verschiebe 1 Energie von 1 deiner anderen Pokémon auf dieses Pokémon.",
			it: "Durante il tuo turno, puoi usare questa abilità tutte le volte che vuoi. Sposta un'Energia da uno dei tuoi altri Pokémon a questo Pokémon.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá usar esta Habilidade. Mova uma Energia de 1 dos seus outros Pokémon para este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Energized Balloon",
			fr: "Ballon Énergisé",
			es: "Globo Energético",
			'es-mx': "Globo Energético",
			de: "Energiegeladener Ballon",
			it: "Pallone Energizzato",
			pt: "Balão Energizado"
		},

		effect: {
			en: "This attack does 40 more damage for each {P} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {P} attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía {P} unida a este Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada Energía {P} unida a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {P}-Energie 40 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia {P} assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia {P} ligada a este Pokémon."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675896,
		cardmarket: 869695
	}
}

export default card