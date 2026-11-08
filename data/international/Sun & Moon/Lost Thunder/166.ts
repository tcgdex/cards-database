import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Toucannon",
		'fr-fr': "Bazoucan",
		'es-es': "Toucannon",
		'it-it': "Toucannon",
		'pt-br': "Toucannon",
		'de-de': "Tukanon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		733,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Trumbeak",
		'fr-fr': "Piclairon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Heat Beak",
				'fr-fr': "Bec Thermique",
				'es-es': "Pico Ígneo",
				'it-it': "Becco Infuocato",
				'pt-br': "Bico de Calor",
				'de-de': "Hitzeschnabel"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giganticannon",
				'fr-fr': "Gigantocanon",
				'es-es': "Gigantoucañón",
				'it-it': "Giganticannone",
				'pt-br': "Gigacanhão",
				'de-de': "Gigantukanone"
			},
			effect: {
				'en-us': "If this Pokémon evolved during this turn, this attack does nothing.",
				'fr-fr': "Si ce Pokémon a évolué pendant ce tour, cette attaque ne fait rien.",
				'es-es': "Si este Pokémon ha evolucionado durante este turno, este ataque no hace nada.",
				'it-it': "Se questo Pokémon si è evoluto durante questo turno, questo attacco non ha effetto.",
				'pt-br': "Se este Pokémon evoluiu durante esta vez de jogar, este ataque não fará nada.",
				'de-de': "Wenn sich dieses Pokémon während dieses Zuges entwickelt hat, hat diese Attacke keine Auswirkungen."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Within its beak, its internal gas ignites, explosively launching seeds with enough power to pulverize boulders.",
	},

	thirdParty: {
		cardmarket: 365802,
		tcgplayer: 178989
	}
}

export default card
