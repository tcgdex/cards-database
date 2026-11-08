import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [404],

	name: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
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
				"Lightning",
			],
			name: {
				'en-us': "Zap Kick",
				'fr-fr': "Coup de Pied Ravageur",
				'es-es': "Electropatada",
				'it-it': "Dinamocalcio",
				'pt-br': "Chute Zap",
				'de-de': "Stromtritt"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Lightning"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457738,
				tcgplayer: 213142
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457738,
				tcgplayer: 213142
			}
		},
	],
}

export default card
