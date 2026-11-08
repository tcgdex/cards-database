import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Heal Block",
				'fr-fr': "Anti-Soin",
				'es-es': "Anticura",
				'it-it': "Anticura",
				'pt-br': "Bloqueio de Cura",
				'de-de': "Heilblockade"
			},
			effect: {
				'en-us': "Damage can’t be healed from any Pokémon (both yours and your opponent’s). (Damage counters can still be moved.)",
				'fr-fr': "Les dégâts ne peuvent être soignés pour aucun Pokémon (les vôtres et ceux de votre adversaire). (Les marqueurs de dégâts peuvent toujours être déplacés.)",
				'es-es': "No se puede curar el daño de ningún Pokémon (tanto tuyos como de tu rival). (Todavía se pueden mover los contadores de daño).",
				'it-it': "Non è possibile curare i danni da nessun Pokémon, né i tuoi né quelli del tuo avversario. I segnalini danno possono comunque essere spostati.",
				'pt-br': "Não é possível curar danos de nenhum Pokémon (seus e do seu oponente). (Os marcadores de danos ainda podem ser movidos.)",
				'de-de': "Es kann kein Schaden bei Pokémon (deinen und denen deines Gegners) geheilt werden. (Schadensmarken können jedoch weiterhin verschoben werden.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Oracle Inflict",
				'fr-fr': "Supplice de l'Oracle",
			},
			effect: {
				'en-us': "Does 10 more damage for each card in your opponent's hand.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It brought rains by opening portals to another world. It was revered as a bringer of plentiful harvests.",
	},

	thirdParty: {
		cardmarket: 280301,
		tcgplayer: 83998
	}
}

export default card
