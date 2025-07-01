import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Huntail",
		fr: "Serpang",
		de: "Aalabyss",
		it: "Huntail",
		es: "Huntail",
		pt: "Huntail",
		'es-mx': "Huntail"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Diver's Catch",
			fr: "Prise de Plongée",
			de: "Fang des Tauchers",
			it: "Cattura Subacquea",
			es: "Captura Submarina",
			pt: "Tesouro do Mergulhador",
			'es-mx': "Captura Submarina"
		},

		effect: {
			en: "When 1 of your {W} Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, you may put all Basic {W} Energy attached to that Pokémon into your hand instead of the discard pile.",
			fr: "Lorsque l'un de vos Pokémon {W} est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, vous pouvez ajouter à votre main toutes les Énergies {W} de base attachées à ce Pokémon-là, plutôt que de les placer dans votre pile de défausse.",
			de: "Wenn 1 deiner {W}-Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, kannst du alle an jenes Pokémon angelegten Basis-{W}-Energien auf deine Hand nehmen, anstatt sie auf deinen Ablagestapel zu legen.",
			it: "Quando uno dei tuoi Pokémon {W} viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, puoi prendere tutte le carte Energia base {W} assegnate a quel Pokémon e aggiungerle alle carte che hai in mano invece di metterle nella pila degli scarti.",
			es: "Cuando uno de tus Pokémon {W} queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, puedes poner todas las Energías {W} Básicas unidas a ese Pokémon en tu mano en vez de en la pila de descartes.",
			pt: "Quando 1 dos seus Pokémon {W} for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, você poderá colocar todas as Energias {W} Básicas ligadas àquele Pokémon na sua mão ao invés da pilha de descarte.",
			'es-mx': "Cuando 1 de tus Pokémon {W} queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, puedes poner todas las Energías {W} Básicas unidas a ese Pokémon en tu mano en lugar de en la pila de descartes."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			de: "Wellenplatscher",
			it: "Schizzi d'Onda",
			es: "Chapoteo Ondulante",
			pt: "Onda Borrifante",
			'es-mx': "Acuasalpicadura"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		normal: true,
		reverse: true,
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
