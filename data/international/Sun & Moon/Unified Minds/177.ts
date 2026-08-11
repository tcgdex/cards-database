import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Audino",
		'fr-fr': "Nanméouïe",
		'es-es': "Audino",
		'it-it': "Audino",
		'pt-br': "Audino",
		'de-de': "Ohrdoch"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		531,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Hearing",
				'fr-fr': "Audition",
				'es-es': "Escucha",
				'it-it': "Ascolto",
				'pt-br': "Audição",
				'de-de': "Lauschen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may draw a card.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez piocher une carte.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes robar 1 carta.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi pescare una carta.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo, você poderá comprar 1 carta.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon dein Aktives Pokémon ist, kannst du 1 Karte ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drain Slap",
				'fr-fr': "Baffe Sangsue",
				'es-es': "Absorbebofetón",
				'it-it': "Sberlassorbimento",
				'pt-br': "Bofetada Drenagem",
				'de-de': "Watschensauger"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
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

	description: {
		'en-us': "Using the feelers on its ears, it can tell how someone is feeling or when an egg might hatch.",
	},

	thirdParty: {
		cardmarket: 388672,
		tcgplayer: 195179
	}
}

export default card
