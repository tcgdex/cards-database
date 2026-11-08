import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [503],
	set: Set,

	name: {
		'fr-fr': "Clamiral de Hisui",
		'de-de': "Hisui-Admurai",
		'es-es': "Samurott de Hisui",
		'pt-br': "Samurott de Hisui",
		'it-it': "Samurott di Hisui",
		'en-us': "Hisuian Samurott"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		'fr-fr': "Mateloutre",
		'de-de': "Zwottronin",
		'es-es': "Dewott",
		'pt-br': "Dewott",
		'it-it': "Dewott",
		'en-us': "Dewott"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Posture Rusée",
			'de-de': "Gewiefte Taktik",
			'es-es': "Posición Astuta",
			'pt-br': "Postura Ardilosa",
			'it-it': "Posa Scaltra",
			'en-us': "Wily Stance"
		},

		effect: {
			'fr-fr': "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 3 cartes.",
			'de-de': "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 3 Karten ziehen.",
			'es-es': "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 3 cartas.",
			'pt-br': "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 3 cartas.",
			'it-it': "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare tre carte.",
			'en-us': "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 3 cards."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Maîtrise Obscure",
			'de-de': "Meister der Dunkelheit",
			'es-es': "Maestría Oscura",
			'pt-br': "Maestria Sombria",
			'it-it': "Maestria Oscura",
			'en-us': "Dark Mastery"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Energie 20 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida a todos tus Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a todos os seus Pokémon.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai tuoi Pokémon.",
			'en-us': "This attack does 20 more damage for each Energy attached to all of your Pokémon."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	description: {
		'en-us': "Hard of heart and deft of blade, this rare form of Samurott is a product of the Pokémon's evolution in the region of Hisui. Its turbulent blows crash into foes like ceaseless pounding waves."
	},

	thirdParty: {
		cardmarket: 611338
	}
}

export default card
