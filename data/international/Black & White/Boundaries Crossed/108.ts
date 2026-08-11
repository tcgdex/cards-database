import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Ditto",
		'fr-fr': "Métamorph",
		'es-es': "Ditto",
		'it-it': "Ditto",
		'pt-br': "Ditto",
		'de-de': "Ditto"
	},

	illustrator: "HiRON",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		132,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Transform",
				'fr-fr': "Morphing",
				'es-es': "Transform",
				'it-it': "Trasformazione",
				'pt-br': "Transformação",
				'de-de': "Wandler"
			},
			effect: {
				'en-us': "During your turn (before your attack), you may put a Basic Pokémon from your hand on top of this Pokémon. (This does not count as playing that Pokémon or evolving.) This Pokémon is now that Pokémon. (Any cards attached to this Pokémon, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.)",
				'fr-fr': "Pendant votre tour (avant votre attaque), vous pouvez placer un Pokémon de base de votre main sur ce Pokémon. (Cela n’équivaut pas à jouer ou à faire évoluer le Pokémon de base choisi.) Ce Pokémon devient le Pokémon de base choisi. (Les cartes attachées à ce Pokémon, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon.)",
				'es-es': "Durante tu turno (antes de tu ataque), puedes poner un Pokémon Básico de tu mano sobre este Pokémon. (Esto no equivale a jugar a ese Pokémon o hacerlo evolucionar.) Este Pokémon pasa a ser ese Pokémon. (Todas las cartas unidas a este Pokémon, los contadores de daño, las Condiciones Especiales, los turnos de juego y todos los demás efectos permanecen en el nuevo Pokémon.)",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi prendere un Pokémon Base tra le carte che hai in mano e metterlo sopra a questo Pokémon (questa azione non vale come evoluzione o messa in gioco del Pokémon). Questo Pokémon ora diventa quel Pokémon (le carte assegnate a questo Pokémon, i segnalini danno, le condizioni speciali, il numero di turni da cui è in gioco e qualsiasi altro effetto restano sul nuovo Pokémon).",
				'pt-br': "Durante sua vez de jogar (antes de atacar), você pode colocar um Pokémon Básico da sua mão em cima deste Pokémon. (Isso não conta como jogar esse Pokémon ou evoluir.) Este Pokémon agora é aquele Pokémon. (Quaisquer cards ligados a esse Pokémon, marcadores de danos, Condições Especiais, vezes em jogo e quaisquer outros efeitos permanecem no novo Pokémon.)",
				'de-de': "Während deines Zuges (vor deinem Angriff) kannst du ein Basis-Pokémon aus deiner Hand auf dieses Pokémon legen. (Das zählt nicht als Spielen des gewählten Basis-Pokémon oder als Entwickeln deines Aktiven Pokémon.) Dieses Pokémon ist jetzt das gewählte Pokémon. (Alle an dieses Pokémon angelegten Karten sowie alle Schadensmarken, Speziellen Zustände, Spielzüge und alle anderen Effekte verbleiben auf dem neuen Pokémon.)"
			},
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
		'en-us': "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
	},

	thirdParty: {
		cardmarket: 280695,
		tcgplayer: 84845
	}
}

export default card
