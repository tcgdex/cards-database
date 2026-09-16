import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorina",
		fr: "Nidorina",
		de: "Nidorina",
		es: "Nidorina",
		it: "Nidorina",
		'es-mx': "Nidorina"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Share Happiness",
			fr: "Partage de Bonheur",
			de: "Geteilte Freude",
			es: "Felicidad Compartida",
			it: "Condividi Felicità",
			'es-mx': "Felicidad Compartida"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Heal 30 damage from 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Soignez 30 dégâts de l'un de vos Pokémon.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Cura 30 puntos de daño a uno de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Cura uno dei tuoi Pokémon da 30 danni.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Cura 30 puntos de daño a 1 de tus Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			es: "Mordisco",
			it: "Morso",
			'es-mx': "Mordida"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card