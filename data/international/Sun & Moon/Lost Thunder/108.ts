import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Naganadel",
		'fr-fr': "Mandrillon",
		'es-es': "Naganadel",
		'it-it': "Naganadel",
		'pt-br': "Naganadel",
		'de-de': "Agoyon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		804,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Poipole",
		'fr-fr': "Vémini",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Charging Up",
				'fr-fr': "Recharge",
				'es-es': "Cargando",
				'it-it': "Caricamento",
				'pt-br': "Carregando",
				'de-de': "Aufladen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a basic Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de base de votre pile de défausse à ce Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia básica da sua pilha de descarte a este Pokémon.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen."
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
				'en-us': "Turning Point",
				'fr-fr': "Point Décisif",
				'es-es': "Punto de Inflexión",
				'it-it': "Punto di Svolta",
				'pt-br': "Dar a Volta",
				'de-de': "Wendepunkt"
			},
			effect: {
				'en-us': "If you have exactly 3 Prize cards remaining, this attack does 80 more damage.",
				'fr-fr': "S’il vous reste exactement 3 cartes Récompense, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si te quedan exactamente 3 cartas de Premio, este ataque hace 80 puntos de daño más.",
				'it-it': "Se hai esattamente tre carte Premio rimanenti, questo attacco infligge 80 danni in più.",
				'pt-br': "Se você tiver exatamente 3 cartas de Prêmio restantes, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn du genau 3 verbleibende Preiskarten hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It stores hundreds of liters of poisonous liquid inside its body. It is one of the organisms known as UBs.",
	},

	thirdParty: {
		cardmarket: 365745,
		tcgplayer: 178921
	}
}

export default card
