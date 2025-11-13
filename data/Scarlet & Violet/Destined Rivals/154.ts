import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [233],
	set: Set,

	name: {
		en: "Team Rocket's Porygon2",
		fr: "Porygon2 de la Team Rocket",
		de: "Team Rockets Porygon2",
		it: "Porygon2 del Team Rocket",
		es: "Porygon2 del Team Rocket",
		pt: "Porygon2 da Equipe Rocket",
		'es-mx': "Porygon2 del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		en: "Team Rocket's Porygon",
		fr: "Porygon de la Team Rocket",
		de: "Team Rockets Porygon",
		it: "Porygon del Team Rocket",
		es: "Porygon del Team Rocket",
		pt: "Porygon da Equipe Rocket",
		"es-mx": "Porygon del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "R Command",
			fr: "Commande R",
			de: "R-Befehl",
			it: "Comando R",
			es: "Comando R",
			pt: "Comando R",
			'es-mx': "Comando R"
		},

		effect: {
			en: "This attack does 20 damage for each Supporter card that has \"Team Rocket\" in its name in your discard pile.",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte Supporter dans votre pile de défausse ayant \" Team Rocket \" dans son nom.",
			de: "Diese Attacke fügt für jede Unterstützerkarte in deinem Ablagestapel, bei der \"Team Rocket\" zum Namen gehört, 20 Schadenspunkte zu.",
			it: "Questo attacco infligge 20 danni per ogni carta Aiuto nella tua pila degli scarti che ha \"Team Rocket\" nel nome.",
			es: "Este ataque hace 20 puntos de daño por cada carta de Partidario en tu pila de descartes que tenga \"Team Rocket\" en su nombre.",
			pt: "Este ataque causa 20 pontos de dano para cada carta de Apoiador que tenha \"Equipe Rocket\" em seu nome na sua pilha de descarte.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada carta de Partidario en tu pila de descartes que tenga \"Equipo Rocket\" en su nombre."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
