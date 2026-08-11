import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [36],

	name: {
		'en-us': "Clefable",
		'fr-fr': "Mélodelfe",
		'es-es': "Clefable",
		'it-it': "Clefable",
		'pt-br': "Clefable",
		'de-de': "Pixi"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Lunar Blessing",
				'fr-fr': "Bénédiction Sélène",
				'es-es': "Bendición Lunar",
				'it-it': "Preghiera della Luna",
				'pt-br': "Bênção da Lua",
				'de-de': "Mondsegen"
			},
			effect: {
				'en-us': "Once during your turn, if your Active Pokémon has any Psychic Energy attached, you may heal 20 damage from it, and it recovers from a Special Condition.",
				'fr-fr': "Une fois pendant votre tour, si de l'Énergie Psychic est attachée à votre Pokémon Actif, vous pouvez soigner 20 dégâts de ce Pokémon et il guérit d'un État spécial.",
				'es-es': "Una vez durante tu turno, si tu Pokémon Activo tiene alguna Energía Psychic unida a él, puedes curarle 20 puntos de daño, y se recupera de una Condición Especial.",
				'it-it': "Una sola volta durante il tuo turno, se il tuo Pokémon attivo ha delle Energie Psychic assegnate, puoi curarlo da 20 danni. Quel Pokémon guarisce da una condizione speciale.",
				'pt-br': "Uma vez durante o seu turno, se o seu Pokémon Ativo tiver alguma Energia Psychic ligada a ele, você poderá curar 20 pontos de dano dele e ele se recuperará de 1 Condição Especial.",
				'de-de': "Einmal während deines Zuges, wenn an dein Aktives Pokémon mindestens 1 Psychic-Energie angelegt ist, kannst du 20 Schadenspunkte bei ihm heilen, und es erholt sich von einem Speziellen Zustand."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magical Shot",
				'fr-fr': "Coup Magique",
				'es-es': "Disparo Mágico",
				'it-it': "Magicolpo",
				'pt-br': "Tiro Mágico",
				'de-de': "Magischer Schuss"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511740,
				tcgplayer: 226468
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511740,
				tcgplayer: 226468
			}
		},
	],
}

export default card
