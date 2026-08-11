import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Florges",
		'fr-fr': "Florges",
		'es-es': "Florges",
		'it-it': "Florges",
		'pt-br': "Florges",
		'de-de': "Florges"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		671,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Floette",
		'fr-fr': "Floette",
		'es-es': "Floette",
		'it-it': "Floette",
		'pt-br': "Floette",
		'de-de': "Floette"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Calming Aroma",
				'fr-fr': "Arôme Apaisant",
				'es-es': "Aroma Tranquilizador",
				'it-it': "Aroma Distensivo",
				'pt-br': "Aroma Calmante",
				'de-de': "Beruhigendes Aroma"
			},
			effect: {
				'en-us': "Each of your Pokémon's attacks costs Fairy less.",
				'fr-fr': "Chacune des attaques de vos Pokémon coûte Fairy de moins.",
				'es-es': "Los ataques de tus Pokémon cuestan Fairy menos.",
				'it-it': "Ciascuno degli attacchi dei tuoi Pokémon costa Fairy in meno",
				'pt-br': "Os ataques de cada um dos seus Pokémon custam Fairy a menos.",
				'de-de': "Die Angriffskosten jedes Angriffs deiner Pokémon verringern sich um Fairy."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Wonder Shine",
				'fr-fr': "Éclat Merveilleux",
				'es-es': "Brillo Prodigioso",
				'it-it': "Luce Meraviglia",
				'pt-br': "Brilho Encantado",
				'de-de': "Wunderglanz"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "In times long past, governors of castles would invite Florges to create flower gardens to embellish the castle domains.",
	},

	thirdParty: {
		cardmarket: 286349,
		tcgplayer: 107222
	}
}

export default card
