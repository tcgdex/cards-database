import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Lileep",
		fr: "Lilia",
		es: "Lileep",
		it: "Lileep",
		pt: "Lileep",
		de: "Liliep"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		345,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "RESTORED",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Prehistoric Call",
				fr: "Appel Préhistorique",
				es: "Llamada Prehistórica",
				it: "Chiamata Preistorica",
				pt: "Chamado Pre-histórico",
				de: "Prähistorischer Ruf"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon on the bottom of your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez placer ce Pokémon en dessous de votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu pila de descartes, puedes ponerlo en la parte inferior de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua pila degli scarti, puoi metterlo in fondo al tuo mazzo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver na sua pilha de descarte, você pode colocá-lo na base de seu baralho.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich dieses Pokémon in deinem Ablagestapel befindet, dieses Pokémon unter dein Deck legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale Épuisante",
			},
			effect: {
				en: "Heal 10 damage from this Pokémon.",
				fr: "Soignez 10 dégâts à ce Pokémon.",
			},
			damage: 20,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281024
	}
}

export default card
