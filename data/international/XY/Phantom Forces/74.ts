import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Hydreigon",
		'fr-fr': "Trioxhydre",
		'es-es': "Hydreigon",
		'it-it': "Hydreigon",
		'pt-br': "Hydreigon",
		'de-de': "Trikephalo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
		'es-es': "Zweilous",
		'it-it': "Zweilous",
		'pt-br': "Zweilous",
		'de-de': "Duodino"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dark Impulse",
				'fr-fr': "Impulsion Obscure",
				'es-es': "Impulso Oscuro",
				'it-it': "Scurimpulso",
				'pt-br': "Impulso Sombrio",
				'de-de': "Dunkler Impuls"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Darkness Energy card from your discard pile to your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Darkness de votre pile de défausse à votre Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Darkness de tu pila de descartes a tu Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare al tuo Pokémon attivo una carta Energia Darkness dalla tua pila degli scarti.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Darkness da sua pilha de descarte ao seu Pokémon Ativo.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Darkness-Energiekarte von deinem Ablagestapel an dein Aktives Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crazy Headbutt",
				'fr-fr': "Coup d'Boule Fou",
				'es-es': "Cabezazo Alocado",
				'it-it': "Bottintesta Folle",
				'pt-br': "Cabeçada Louca",
				'de-de': "Irre Kopfnuss"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Their heads on their arms do not have brains. They use all three heads to consume and destroy everything.",
	},

	thirdParty: {
		cardmarket: 281880,
		tcgplayer: 94642
	}
}

export default card
