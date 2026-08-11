import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [608],

	name: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'es-es': "Litwick",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'de-de': "Lichtel"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Top Entry",
				'fr-fr': "Tombé de Haut",
				'es-es': "Entrada Superior",
				'it-it': "Primacima",
				'pt-br': "Entrada Superior",
				'de-de': "Einzug"
			},
			effect: {
				'en-us': "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench.",
				'fr-fr': "Une fois pendant votre tour, si vous avez pioché ce Pokémon de votre deck au début de votre tour, et si votre Banc n'est pas plein, plutôt que d'ajouter cette carte à votre main, vous pouvez la placer sur votre Banc.",
				'es-es': "Una vez durante tu turno, si has robado este Pokémon de tu baraja al principio de tu turno y tu Banca no está llena, antes de ponerlo en tu mano, puedes ponerlo en tu Banca.",
				'it-it': "Una sola volta durante il tuo turno, se hai pescato questo Pokémon dal tuo mazzo all'inizio del tuo turno e la tua panchina non è piena, prima di aggiungerlo alle carte che hai in mano, puoi metterlo nella tua panchina.",
				'pt-br': "Uma vez durante o seu turno, se você tiver comprado este Pokémon do seu baralho no começo do seu turno e o seu Banco não estiver cheio, antes de colocá-lo na sua mão, você poderá colocá-lo no seu Banco.",
				'de-de': "Einmal während deines Zuges, wenn du zu Beginn deines Zuges dieses Pokémon von deinem Deck gezogen hast und deine Bank nicht voll ist, bevor du es auf deine Hand nimmst, kannst du es auf deine Bank legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Reignite",
				'fr-fr': "Rallumer",
				'es-es': "Reavivar",
				'it-it': "Ravvivare",
				'pt-br': "Reacender",
				'de-de': "Neu entfachen"
			},
			effect: {
				'en-us': "Attach a Fire Energy card from your discard pile to 1 of your Pokémon.",
				'fr-fr': "Attachez à l'un de vos Pokémon une carte Énergie Fire de votre pile de défausse.",
				'es-es': "Une 1 carta de Energía Fire de tu pila de descartes a 1 de tus Pokémon.",
				'it-it': "Assegna a uno dei tuoi Pokémon una carta Energia Fire dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia Fire da sua pilha de descarte a 1 dos seus Pokémon.",
				'de-de': "Lege 1 Fire-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon an."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 80,
	types: ["Fire"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "This Pokémon appears just before someone passes away, so it's feared as an emissary of death."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457618,
				tcgplayer: 213108
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457618,
				tcgplayer: 213108
			}
		},
	],
}

export default card
