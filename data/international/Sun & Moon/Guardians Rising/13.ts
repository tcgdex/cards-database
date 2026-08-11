import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Chandelure",
		'fr-fr': "Lugulabre",
		'es-es': "Chandelure",
		'it-it': "Chandelure",
		'pt-br': "Chandelure",
		'de-de': "Skelabra"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		609,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shady Move",
				'fr-fr': "Déplacement Louche",
				'es-es': "Movimiento Sombrío",
				'it-it': "Ombramossa",
				'pt-br': "Movimento Umbroso",
				'de-de': "Zwielichtige Aktion"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move 1 damage counter from 1 Pokémon to another Pokémon.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts d'un Pokémon à un autre Pokémon.",
				'es-es': "Once during your turn (before your attack), you may move 1 damage counter from 1 Pokémon to another Pokémon.",
				'it-it': "d",
				'pt-br': "Once during your turn (before your attack), you may move 1 damage counter from 1 Pokémon to another Pokémon.",
				'de-de': "Once during your turn (before your attack), you may move 1 damage counter from 1 Pokémon to another Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Super Singe",
				'fr-fr': "Super Roussi",
				'es-es': "Superquemadura",
				'it-it': "Super Scottata",
				'pt-br': "Superchamuscada",
				'de-de': "Super-Versengung"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Being consumed in Chandelure's flame burns up the spirit, leaving the body behind.",
	},

	thirdParty: {
		cardmarket: 297477,
		tcgplayer: 130759
	}
}

export default card
