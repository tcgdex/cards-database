import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [474],
	set: Set,

	name: {
		en: "Team Rocket's Porygon-Z",
		fr: "Porygon-Z de la Team Rocket",
		de: "Team Rockets Porygon-Z",
		it: "Porygon-Z del Team Rocket",
		es: "Porygon-Z del Team Rocket",
		pt: "Porygon-Z da Equipe Rocket",
		'es-mx': "Porygon-Z del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	evolveFrom: {
		en: "Team Rocket's Porygon2",
		fr: "Porygon2 de la Team Rocket",
		de: "Team Rockets Porygon2",
		it: "Porygon2 del Team Rocket",
		es: "Porygon2 del Team Rocket",
		pt: "Porygon2 da Equipe Rocket",
		'es-mx': "Porygon2 del Equipo Rocket"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Reconstitute",
			fr: "Reconstitution",
			de: "Rekonfigurieren",
			it: "Ricostituzione",
			es: "Reconstitución",
			pt: "Reconstituição",
			'es-mx': "Reconstitución"
		},

		effect: {
			en: "You must discard 2 cards from your hand in order to use this Ability. Once during your turn, you may draw a card.",
			fr: "Vous devez défausser 2 cartes de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher une carte.",
			de: "Du musst 2 Karten aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 1 Karte ziehen.",
			it: "Devi scartare due carte che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare una carta.",
			es: "Debes descartar 2 cartas de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 1 carta.",
			pt: "Você deve descartar 2 cartas da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar uma carta.",
			'es-mx': "Debes descartar 2 cartas de tu mano para poder usar esta Habilidad. Una vez durante tu turno, puedes robar 1 carta."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

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
	],

	thirdParty: {
		cardmarket: 826029
	}
}

export default card
