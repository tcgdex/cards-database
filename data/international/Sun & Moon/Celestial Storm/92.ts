import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'es-es': "Beldum",
		'it-it': "Beldum",
		'pt-br': "Beldum",
		'de-de': "Tanhel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		374,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Conductive Body",
				'fr-fr': "Corps Conducteur",
				'es-es': "Cuerpo Conductor",
				'it-it': "Lama Furente",
				'pt-br': "Corpo Condutor",
				'de-de': "Leitender Körper"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, its Retreat Cost is Colorless less for each Beldum on your Bench.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, son Coût de Retraite est diminué de Colorless pour chaque Terhal sur votre Banc.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, su Coste de Retirada es de Colorless menos por cada Beldum en tu Banca.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, il suo costo di ritirata è ridotto di Colorless per ogni Beldum nella tua panchina.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, seu custo de Recuo será Colorless a menos para cada Beldum no seu Banco.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, verringern sich seine Rückzugskosten um Colorless für jedes Tanhel auf deiner Bank."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "With magnetic traction, it pulls its opponents in close. When they're in range, it slashes them with its rear claws.",
	},

	thirdParty: {
		cardmarket: 361336,
		tcgplayer: 170917
	}
}

export default card
