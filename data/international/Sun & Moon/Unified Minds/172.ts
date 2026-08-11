import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Bibarel",
		'fr-fr': "Castorno",
		'es-es': "Bibarel",
		'it-it': "Bibarel",
		'pt-br': "Bibarel",
		'de-de': "Bidifas"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		400,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Unaware",
				'fr-fr': "Inconscient",
				'es-es': "Ignorante",
				'it-it': "Imprudenza",
				'pt-br': "Ignorante",
				'de-de': "Unkenntnis"
			},
			effect: {
				'en-us': "Prevent all effects of your opponent’s attacks, except damage, done to this Pokémon.",
				'fr-fr': "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
				'es-es': "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a este Pokémon.",
				'it-it': "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon.",
				'pt-br': "Previne todos os efeitos de ataques do seu oponente, exceto dano, causados a este Pokémon.",
				'de-de': "Verhindere alle Effekte von Attacken deines Gegners, außer Schaden, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Amnesia",
				'fr-fr': "Amnésie",
				'es-es': "Amnesia",
				'it-it': "Amnesia",
				'pt-br': "Amnésia",
				'de-de': "Amnesie"
			},
			effect: {
				'en-us': "Choose 1 of your opponent’s Active Pokémon’s attacks. That Pokémon can’t use that attack during your opponent’s next turn.",
				'fr-fr': "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
				'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu rival.",
				'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Aquele Pokémon não poderá usar aquele ataque durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Jenes Pokémon kann jene Attacke während des nächsten Zuges deines Gegners nicht einsetzen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It busily makes its nest with stacks of branches and roots it has cut up with its sharp incisors.",
	},

	thirdParty: {
		cardmarket: 388647,
		tcgplayer: 195172
	}
}

export default card
