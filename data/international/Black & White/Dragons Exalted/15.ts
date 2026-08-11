import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Roserade",
		'fr-fr': "Roserade",
		'es-es': "Roserade",
		'it-it': "Roserade",
		'pt-br': "Roserade",
		'de-de': "Roserade"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		407,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Roselia",
		'fr-fr': "Rosélia",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Le Parfum",
				'fr-fr': "Parfum",
				'es-es': "Perfume",
				'it-it': "Adorabile",
				'pt-br': "Le Parfum",
				'de-de': "Duftwasser"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may search your deck for any card and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez chercher une carte dans votre deck et l’ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes buscar en tu baraja una carta cualquiera y ponerla en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi cercare nel tuo mazzo una carta qualsiasi e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode procurar qualquer card em seu baralho e colocá-lo em sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dein Deck nach einer beliebigen Karte durchsuchen und diese auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Squeeze",
				'fr-fr': "Compression",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 30,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Each of its hands contains different toxins, but both hands can jab with near-fatal power.",
	},

	thirdParty: {
		cardmarket: 280453,
		tcgplayer: 88832
	}
}

export default card
