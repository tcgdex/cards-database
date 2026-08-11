import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Tapu Koko",
		'fr-fr': "Tokorico",
		'es-es': "Tapu Koko",
		'it-it': "Tapu Koko",
		'pt-br': "Tapu Koko",
		'de-de': "Kapu-Riki"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		785,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strafe",
				'fr-fr': "Bombarder",
				'es-es': "Pasada de Ataque",
				'it-it': "Mitragliare",
				'pt-br': "Bombardear",
				'de-de': "Beharken"
			},
			effect: {
				'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
				'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Flashing Bolt",
				'fr-fr': "Éclair Aveuglant",
				'es-es': "Rayo Destellante",
				'it-it': "Bolide Abbagliante",
				'pt-br': "Raio Piscante",
				'de-de': "Leuchtblitz"
			},
			effect: {
				'en-us': "This Pokémon can’t use Flashing Bolt during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Éclair Aveuglant pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Rayo Destellante durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Bolide Abbagliante.",
				'pt-br': "Este Pokémon não poderá usar Raio Piscante durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Leuchtblitz während deines nächsten Zuges nicht einsetzen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It confuses its enemies by flying too quickly for the eye to follow. It has a hair-trigger temper but forgets what made it angry an instant later.",
	},

	thirdParty: {
		cardmarket: 365723,
		tcgplayer: 178894
	}
}

export default card
