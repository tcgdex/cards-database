import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [367],
	set: Set,

	name: {
		'en-us': "Huntail",
		'fr-fr': "Serpang",
		'de-de': "Aalabyss",
		'it-it': "Huntail",
		'es-es': "Huntail",
		'pt-br': "Huntail",
		'es-mx': "Huntail"
	},

	illustrator: "Scav",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
		'de-de': "Perlu",
		'it-it': "Clamperl",
		'es-es': "Clamperl",
		'pt-br': "Clamperl",
		'es-mx': "Clamperl"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Diver's Catch",
			'fr-fr': "Prise de Plongée",
			'de-de': "Fang des Tauchers",
			'it-it': "Cattura Subacquea",
			'es-es': "Captura Submarina",
			'pt-br': "Tesouro do Mergulhador",
			'es-mx': "Captura Submarina"
		},

		effect: {
			'en-us': "When 1 of your {W} Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, you may put all Basic {W} Energy attached to that Pokémon into your hand instead of the discard pile.",
			'fr-fr': "Lorsque l'un de vos Pokémon {W} est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, vous pouvez ajouter à votre main toutes les Énergies {W} de base attachées à ce Pokémon-là, plutôt que de les placer dans votre pile de défausse.",
			'de-de': "Wenn 1 deiner {W}-Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, kannst du alle an jenes Pokémon angelegten Basis-{W}-Energien auf deine Hand nehmen, anstatt sie auf deinen Ablagestapel zu legen.",
			'it-it': "Quando uno dei tuoi Pokémon {W} viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, puoi prendere tutte le carte Energia base {W} assegnate a quel Pokémon e aggiungerle alle carte che hai in mano invece di metterle nella pila degli scarti.",
			'es-es': "Cuando uno de tus Pokémon {W} queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, puedes poner todas las Energías {W} Básicas unidas a ese Pokémon en tu mano en vez de en la pila de descartes.",
			'pt-br': "Quando 1 dos seus Pokémon {W} for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, você poderá colocar todas as Energias {W} Básicas ligadas àquele Pokémon na sua mão ao invés da pilha de descarte.",
			'es-mx': "Cuando 1 de tus Pokémon {W} queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, puedes poner todas las Energías {W} Básicas unidas a ese Pokémon en tu mano en lugar de en la pila de descartes."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'de-de': "Wellenplatscher",
			'it-it': "Schizzi d'Onda",
			'es-es': "Chapoteo Ondulante",
			'pt-br': "Onda Borrifante",
			'es-mx': "Acuasalpicadura"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825929,
				tcgplayer: 632868
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825929,
				tcgplayer: 632868
			}
		},
	],
}

export default card
