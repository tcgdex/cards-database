import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Dragonite",
		'fr-fr': "Dracolosse",
		'es-es': "Dragonite",
		'it-it': "Dragonite",
		'pt-br': "Dragonite",
		'de-de': "Dragoran"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
		'de-de': "Dragonir"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Max Wind",
				'fr-fr': "Vent Max",
				'es-es': "Viento Máximo",
				'it-it': "Ventoforte",
				'pt-br': "Vento Máximo",
				'de-de': "Top-Wind"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may heal all damage from 1 of your Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez soigner tous les dégâts de l'un de vos Pokémon.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes curar todos los puntos de daño a 1 de tus Pokémon.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi curare uno dei tuoi Pokémon da tutti i danni.",
				'pt-br': "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode curar todos os danos de 1 dos seus Pokémon.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du alle Schadenspunkte bei 1 deiner Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Mach Press",
				'fr-fr': "Mach Press",
				'es-es': "Presión Mach",
				'it-it': "Pressa Mach",
				'pt-br': "Aperto Supersônico",
				'de-de': "Tempo-Druckstoß"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 2 monedas. Si ambas son cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 2 moedas. Se ambas forem cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 2 Münzen. Zeigen beide \"Kopf\", ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 80,

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
		'en-us': "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.",
	},

	thirdParty: {
		cardmarket: 282719,
		tcgplayer: 98087
	}
}

export default card
