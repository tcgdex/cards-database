import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Florges BREAK",
		'fr-fr': "Florges TURBO",
		'es-es': "Florges TURBO",
		'it-it': "Florges TURBO",
		'pt-br': "Florges TURBO",
		'de-de': "Florges-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		671,
	],

	hp: 140,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Florges",
		'fr-fr': "Florges",
		'es-es': "Florges",
		'it-it': "Florges",
		'pt-br': "Florges",
		'de-de': "Florges"
	},

	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Floral Breeze",
				'fr-fr': "Brise Florale",
				'es-es': "Brisa Floral",
				'it-it': "Brezza Floreale",
				'pt-br': "Brisa Floral",
				'de-de': "Blumige Brise"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may heal 30 damage and remove a Special Condition from your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts et retirer un État Spécial de votre Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes curar 30 puntos de daño y eliminar una Condición Especial de tu Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi curare 30 danni e rimuovere una condizione speciale dal tuo Pokémon attivo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá curar 30 de danos e remover uma Condição Especial do seu Pokémon Ativo.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du bei deinem Aktiven Pokémon 30 Schadenspunkte heilen und 1 Speziellen Zustand entfernen."
			},
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 286350,
		tcgplayer: 107223
	}
}

export default card
