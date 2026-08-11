import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Vileplume",
		'fr-fr': "Rafflesia",
		'es-es': "Vileplume",
		'it-it': "Vileplume",
		'pt-br': "Vileplume",
		'de-de': "Giflor"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Disgusting Pollen",
				'fr-fr': "Pollen Dégoûtant",
				'es-es': "Polen Asqueroso",
				'it-it': "Ripugnapolline",
				'pt-br': "Pólen Nojento",
				'de-de': "Ekelhafter Pollen"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent’s Basic Pokémon can’t attack.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon de base de votre adversaire ne peuvent pas attaquer.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, los Pokémon Básicos de tu rival no pueden atacar.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, i Pokémon Base del tuo avversario non possono attaccare.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, o Pokémon Básico do seu oponente não poderá atacar.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, kann das Basis-Pokémon deines Gegners nicht angreifen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Downer Shock",
				'fr-fr': "Choc Immobilisateur",
				'es-es': "Impacto Calmante",
				'it-it': "Shock Calmante",
				'pt-br': "Choque Calmante",
				'de-de': "Beruhigungsschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Asleep. If tails, your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato. Se esce croce, il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Adormecido. Se sair coroa, o Pokémon Ativo do seu oponente será Confundido.",
				'de-de': "Wirf 1 Münze. Bei Kopf schläft das Aktive Pokémon deines Gegners jetzt. Bei Zahl ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.",
	},

	thirdParty: {
		cardmarket: 299413,
		tcgplayer: 138276
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
