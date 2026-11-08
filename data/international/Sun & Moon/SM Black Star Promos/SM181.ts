import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		'en-us': "Melmetal",
		'fr-fr': "Melmetal",
		'es-es': "Melmetal",
		'it-it': "Melmetal",
		'pt-br': "Melmetal",
		'de-de': "Melmetal"
	},

	illustrator: "TOKIYA",
	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Metal Eater",
			'fr-fr': "Mange Métal",
			'es-es': "Devorametales",
			'it-it': "Mangiametallo",
			'pt-br': "Devorador de Metal",
			'de-de': "Metallesser"
		},

		effect: {
			'en-us': "Once during your turn (before your attack), you may discard a Metal Pokémon from your hand. If you do, heal 100 damage from this Pokémon.",
			'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser un Pokémon Metal de votre main. Dans ce cas, soignez 100 dégâts à ce Pokémon.",
			'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 Pokémon Metal de tu mano. Si lo haces, cura 100 puntos de daño a este Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare un Pokémon Metal che hai in mano. Se lo fai, cura questo Pokémon da 100 danni.",
			'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 Pokémon Metal da sua mão. Se fizer isto, cure 100 pontos de dano deste Pokémon.",
			'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Metal-Pokémon aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, heile 100 Schadenspunkte bei diesem Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 130,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	retreat: 4,

	description: {
		'en-us': "Revered long ago for its capacity to create iron from nothing, for some reason it has come back to life after 3,000 years.",
	},
}

export default card
