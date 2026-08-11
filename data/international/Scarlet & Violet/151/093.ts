import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [93],
	set: Set,

	name: {
		'fr-fr': "Spectrum",
		'en-us': "Haunter",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Fantominus",
		'en-us': "Gastly",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Retour d'Esprit",
			'en-us': "Spirit Return",
			'es-es': "Espíritu Retorno",
			'it-it': "Ritornospirito",
			'pt-br': "Retorno Espiritual",
			'de-de': "Seelenrückkehr"
		},

		effect: {
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez ajouter l'une des cartes Supporter de la pile de défausse de votre adversaire à sa main.",
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put a Supporter card from your opponent's discard pile into their hand.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes poner 1 carta de Partidario de la pila de descartes de tu rival en su mano.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prendere una carta Aiuto dalla pila degli scarti del tuo avversario e aggiungerla alle carte che ha in mano.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar uma carta de Apoiador da pilha de descarte do seu oponente na mão dele.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Unterstützerkarte aus dem Ablagestapel deines Gegners auf seine Hand geben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Murmure",
			'en-us': "Mumble",
			'es-es': "Farfullar",
			'it-it': "Borbottio",
			'pt-br': "Resmungo",
			'de-de': "Grummeln"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733688,
				tcgplayer: 516662,
				cardtrader: 261182
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733688,
				tcgplayer: 516662,
				cardtrader: 261182
			}
		},
	],

	illustrator: "Tomokazu Komiya",

	
}

export default card
