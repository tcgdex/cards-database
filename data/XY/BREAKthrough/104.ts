import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Florges BREAK",
		fr: "Florges TURBO",
		es: "Florges TURBO",
		it: "Florges TURBO",
		pt: "Florges TURBO",
		de: "Florges-TURBO"
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
		en: "Florges",
		fr: "Florges",
		es: "Florges",
		it: "Florges",
		pt: "Florges",
		de: "Florges"
	},

	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Floral Breeze",
				fr: "Brise Florale",
				es: "Brisa Floral",
				it: "Brezza Floreale",
				pt: "Brisa Floral",
				de: "Blumige Brise"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 30 damage and remove a Special Condition from your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts et retirer un État Spécial de votre Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes curar 30 puntos de daño y eliminar una Condición Especial de tu Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi curare 30 danni e rimuovere una condizione speciale dal tuo Pokémon attivo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá curar 30 de danos e remover uma Condição Especial do seu Pokémon Ativo.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du bei deinem Aktiven Pokémon 30 Schadenspunkte heilen und 1 Speziellen Zustand entfernen."
			},
		},
	],

	retreat: 0
}

export default card
