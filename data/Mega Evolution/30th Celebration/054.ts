import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex",
		fr: "Pikachu-ex",
		de: "Pikachu-ex",
		es: "Pikachu ex",
		it: "Pikachu-ex",
		'es-mx': "Pikachu ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [25],
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Zip-Zap Frenzy",
			fr: "Frénésie Électrique",
			de: "Zipp-Zapp-Wahn",
			es: "Frenesí Eléctrico",
			it: "Frenesia Elettrizzante",
			'es-mx': "Frenesí Eléctrico"
		},

		effect: {
			en: "You may attach any number of Basic Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Vous pouvez attacher le nombre voulu de cartes Énergie de base de votre main à vos Pokémon comme il vous plaît.",
			de: "Du kannst beliebig viele Basis-Energiekarten aus deiner Hand beliebig an deine Pokémon anlegen.",
			es: "Puedes unir cualquier cantidad de cartas de Energía Básica de tu mano a tus Pokémon de la manera que desees.",
			it: "Puoi assegnare ai tuoi Pokémon un numero qualsiasi di carte Energia base dalla tua mano nel modo che preferisci.",
			'es-mx': "Puedes unir cualquier cantidad de cartas de Energía Básica de tu mano a tus Pokémon de la manera que quieras."
		},

		cost: ["Lightning"]
	}, {
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
			de: "Donner",
			es: "Trueno",
			it: "Tuono",
			'es-mx': "Trueno"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
		},

		damage: 200,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907661,
				tcgplayer: 712952
			}
		}
	],
}

export default card
