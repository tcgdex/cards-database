import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [474],
	set: Set,

	name: {
		'en-us': "Team Rocket's Porygon-Z",
		'fr-fr': "Porygon-Z de la Team Rocket",
		'de-de': "Team Rockets Porygon-Z",
		'it-it': "Porygon-Z del Team Rocket",
		'es-es': "Porygon-Z del Team Rocket",
		'pt-br': "Porygon-Z da Equipe Rocket",
		'es-mx': "Porygon-Z del Equipo Rocket"
	},


	illustrator: "Anesaki Dynamic",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Team Rocket's Porygon2",
		'fr-fr': "Porygon2 de la Team Rocket",
		'de-de': "Team Rockets Porygon2",
		'it-it': "Porygon2 del Team Rocket",
		'es-es': "Porygon2 del Team Rocket",
		'pt-br': "Porygon2 da Equipe Rocket",
		'es-mx': "Porygon2 del Equipo Rocket"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Reconstitute",
			'fr-fr': "Reconstitution",
			'de-de': "Rekonfigurieren",
			'it-it': "Ricostituzione",
			'es-es': "Reconstitución",
			'pt-br': "Reconstituição",
			'es-mx': "Reconstitución"
		},

		effect: {
			'en-us': "You must discard 2 cards from your hand in order to use this Ability. Once during your turn, you may draw a card.",
			'fr-fr': "Vous devez défausser 2 cartes de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher une carte.",
			'de-de': "Du musst 2 Karten aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 1 Karte ziehen.",
			'it-it': "Devi scartare due carte che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare una carta.",
			'es-es': "Debes descartar 2 cartas de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 1 carta.",
			'pt-br': "Você deve descartar 2 cartas da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar uma carta.",
			'es-mx': "Debes descartar 2 cartas de tu mano para poder usar esta Habilidad. Una vez durante tu turno, puedes robar 1 carta."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "R Command",
			'fr-fr': "Commande R",
			'de-de': "R-Befehl",
			'it-it': "Comando R",
			'es-es': "Comando R",
			'pt-br': "Comando R",
			'es-mx': "Comando R"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Supporter card that has \"Team Rocket\" in its name in your discard pile.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte Supporter dans votre pile de défausse ayant \" Team Rocket \" dans son nom.",
			'de-de': "Diese Attacke fügt für jede Unterstützerkarte in deinem Ablagestapel, bei der \"Team Rocket\" zum Namen gehört, 20 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 20 danni per ogni carta Aiuto nella tua pila degli scarti che ha \"Team Rocket\" nel nome.",
			'es-es': "Este ataque hace 20 puntos de daño por cada carta de Partidario en tu pila de descartes que tenga \"Team Rocket\" en su nombre.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada carta de Apoiador que tenha \"Equipe Rocket\" em seu nome na sua pilha de descarte.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada carta de Partidario en tu pila de descartes que tenga \"Equipo Rocket\" en su nombre."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826029,
				tcgplayer: 630828
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826029,
				tcgplayer: 630828
			}
		},
	],
}

export default card
