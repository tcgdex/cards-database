import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'es-es': "Toxicroak",
		'it-it': "Toxicroak",
		'pt-br': "Toxicroak",
		'de-de': "Toxiquak"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'pt-br': "Croagunk",
		'de-de': "Glibunkel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "More Poison",
				'fr-fr': "Poison Sans Fin",
				'es-es': "Veneno Plus",
				'it-it': "Più Veleno",
				'pt-br': "Veneno a Mais",
				'de-de': "Giftschub"
			},
			effect: {
				'en-us': "Put 2 more damage counters on your opponent's Poisoned Pokémon during Pokémon Checkup.",
				'fr-fr': "Pendant le Contrôle Pokémon, placez 2 marqueurs de dégâts supplémentaires sur les Pokémon Empoisonnés de votre adversaire.",
				'es-es': "Pon 2 contadores de daño más en los Pokémon Envenenados de tu rival durante el Chequeo Pokémon.",
				'it-it': "Metti altri due segnalini danno sui Pokémon avvelenati del tuo avversario durante il controllo Pokémon.",
				'pt-br': "Coloque 2 contadores de dano a mais nos Pokémon Envenenados do seu oponente durante o Checape Pokémon.",
				'de-de': "Lege beim Pokémon-Check 2 Schadensmarken mehr auf die vergifteten Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Claws",
				'fr-fr': "Griffes Empoisonnées",
				'es-es': "Garras Venenosas",
				'it-it': "Velenartigli",
				'pt-br': "Garras Venenosas",
				'de-de': "Giftkrallen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Envenenado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		'en-us': "It bounces toward opponents and gouges them with poisonous claws. No more than a scratch is needed to knock out its adversaries."
	},

	dexId: [454],

	thirdParty: {
		cardmarket: 436729,
		tcgplayer: 208435
	}
}

export default card
