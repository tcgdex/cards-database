import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
		'es-es': "Axew",
		'it-it': "Axew",
		'pt-br': "Axew",
		'de-de': "Milza"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		610,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Unnerve",
				'fr-fr': "Tension",
				'es-es': "Nerviosismo",
				'it-it': "Agitazione",
				'pt-br': "Enervar",
				'de-de': "Anspannung"
			},
			effect: {
				'en-us': "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
				'fr-fr': "Chaque fois que votre adversaire joue une carte Objet ou Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
				'es-es': "Cada vez que tu rival juegue 1 carta de Objeto o de Partidario de su mano, evita todos los efectos de esa carta infligidos a este Pokémon.",
				'it-it': "Ogni volta che il tuo avversario gioca una carta Strumento o Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
				'pt-br': "Sempre que seu oponente jogar 1 carta de Item ou de Apoiador da própria mão, prevenirá todos os efeitos daquela carta causados a este Pokémon.",
				'de-de': "Verhindere jedes Mal, wenn dein Gegner eine Item- oder Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Metal",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They use their tusks to crush the berries they eat. Repeated regrowth makes their tusks strong and sharp.",
	},

	thirdParty: {
		cardmarket: 388562,
		tcgplayer: 195152
	}
}

export default card
