import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [503],
	set: Set,

	name: {
		'en-us': "Hisuian Samurott",
		'fr-fr': "Clamiral de Hisui",
		'es-es': "Samurott de Hisui",
		'it-it': "Samurott di Hisui",
		'pt-br': "Samurott de Hisui",
		'de-de': "Hisui-Admurai"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre",
		'es-es': "Dewott",
		'it-it': "Dewott",
		'pt-br': "Dewott",
		'de-de': "Zwottronin"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Wily Stance",
			'fr-fr': "Posture Rusée",
			'es-es': "Posición Astuta",
			'it-it': "Posa Scaltra",
			'pt-br': "Postura Ardilosa",
			'de-de': "Gewiefte Taktik"
		},

		effect: {
			'en-us': "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 3 cards.",
			'fr-fr': "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 3 cartes.",
			'es-es': "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 3 cartas.",
			'it-it': "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare tre carte.",
			'pt-br': "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 3 cartas.",
			'de-de': "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 3 Karten ziehen."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Dark Mastery",
			'fr-fr': "Maîtrise Obscure",
			'es-es': "Maestría Oscura",
			'it-it': "Maestria Oscura",
			'pt-br': "Maestria Sombria",
			'de-de': "Meister der Dunkelheit"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida a todos tus Pokémon.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a todos os seus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Energie 20 Schadenspunkte mehr zu."
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
		'en-us': "Hard of heart and deft of blade, this rare form of Samurott is a product of the Pokémon's evolution in the region of Hisui. Its turbulent blows crash into foes like ceaseless pounding waves.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658755,
				tcgplayer: 272301
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658755,
				tcgplayer: 272301
			}
		},
	],
}

export default card
