import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Azumarill ex",
		'fr-fr': "Azumarill-ex",
		'es-es': "Azumarill ex",
		'es-mx': "Azumarill ex",
		'de-de': "Azumarill-ex",
		'it-it': "Azumarill-ex",
		'pt-br': "Azumarill ex"
	},
	evolveFrom: {
		'en-us': "Marill",
		'de-de': "Marill",
		'es-es': "Marill",
		'fr-fr': "Marill",
		'it-it': "Marill",
		'pt-br': "Marill",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [184],
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Bubble Gathering",
			'fr-fr': "Rassemblement de Bulles",
			'es-es': "Acopio de Burbujas",
			'es-mx': "Recolección de Burbujas",
			'de-de': "Blasensammler",
			'it-it': "Raccoglibolle",
			'pt-br': "Buscar Bolhas"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may use this Ability. Move an Energy from 1 of your other Pokémon to this Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez utiliser ce talent. Déplacez une Énergie de l'un de vos autres Pokémon vers ce Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes usar esta habilidad. Mueve 1 Energía de uno de tus otros Pokémon a este Pokémon.",
			'es-mx': "Cuantas veces quieras durante tu turno, puedes usar esta Habilidad. Mueve 1 Energía de 1 de tus otros Pokémon a este Pokémon.",
			'de-de': "Beliebig oft während deines Zuges kannst du diese Fähigkeit einsetzen. Verschiebe 1 Energie von 1 deiner anderen Pokémon auf dieses Pokémon.",
			'it-it': "Durante il tuo turno, puoi usare questa abilità tutte le volte che vuoi. Sposta un'Energia da uno dei tuoi altri Pokémon a questo Pokémon.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá usar esta Habilidade. Mova uma Energia de 1 dos seus outros Pokémon para este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Energized Balloon",
			'fr-fr': "Ballon Énergisé",
			'es-es': "Globo Energético",
			'es-mx': "Globo Energético",
			'de-de': "Energiegeladener Ballon",
			'it-it': "Pallone Energizzato",
			'pt-br': "Balão Energizado"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each {P} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {P} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía {P} unida a este Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada Energía {P} unida a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {P}-Energie 40 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia {P} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia {P} ligada a este Pokémon."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869695,
				tcgplayer: 675896
			}
		}
	],
}

export default card
