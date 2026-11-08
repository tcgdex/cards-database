import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Rampardos",
		'fr-fr': "Charkos",
		'es-es': "Rampardos",
		'it-it': "Rampardos",
		'pt-br': "Rampardos",
		'de-de': "Rameidon"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		409,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Cranidos",
		'fr-fr': "Kranidos",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Clean Hit",
				'fr-fr': "Coup Net",
				'es-es': "Impacto Limpio",
				'it-it': "Colpo Pulito",
				'pt-br': "Golpe Certeiro",
				'de-de': "Sauberer Treffer"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Wild Crash",
				'fr-fr': "Collision Agitée",
				'es-es': "Impacto Salvaje",
				'it-it': "Schianto Selvaggio",
				'pt-br': "Batida Violenta",
				'de-de': "Wilder Einschlag"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Basic Pokémon, it is Knocked Out.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de base, il est mis K.O.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Básico, queda Fuera de Combate.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Base, viene messo KO.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, ele será Nocauteado.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, ist es kampfunfähig."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Records exist of a revived fossil that evolved into Rampardos. It proceeded to escape and then destroy a skyscraper with a headbutt.",
	},

	thirdParty: {
		cardmarket: 315993,
		tcgplayer: 157682
	}
}

export default card
