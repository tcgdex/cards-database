import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'es-es': "Blissey",
		'it-it': "Blissey",
		'pt-br': "Blissey",
		'de-de': "Heiteira"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 160,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fresh Egg",
				'fr-fr': "Œuf Frais",
				'es-es': "Huevo Fresco",
				'it-it': "Uova Fresche",
				'pt-br': "Ovo Fresco",
				'de-de': "Frischei"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal 80 damage from your Active Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez soigner 80 dégâts à votre Pokémon Actif.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes curar 80 puntos de daño a tu Pokémon Activo.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi curare il tuo Pokémon attivo da 80 danni.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode curar 80 pontos de dano do seu Pokémon Ativo.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 80 Schadenspunkte bei deinem Aktiven Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-Edge",
				'fr-fr': "Damoclès",
				'es-es': "Doble Filo",
				'it-it': "Sdoppiatore",
				'pt-br': "Faca de Dois Gumes",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "This Pokémon does 80 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 80 dégâts.",
				'es-es': "Este Pokémon se hace 80 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 80 danni a se stesso.",
				'pt-br': "Este Pokémon causa 80 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 80 Schadenspunkte zu."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Even the most ferocious Pokémon become calm when they eat Blissey's egg, which is said to be filled with happiness.",
	},

	thirdParty: {
		cardmarket: 297695,
		tcgplayer: 131020
	}
}

export default card
