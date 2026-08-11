import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [869],

	name: {
		'en-us': "Alcremie",
		'fr-fr': "Charmilly",
		'es-es': "Alcremie",
		'it-it': "Alcremie",
		'pt-br': "Alcremie",
		'de-de': "Pokusan"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'es-es': "Milcery",
		'it-it': "Milcery",
		'pt-br': "Milcery",
		'de-de': "Hokumil"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sharing Sweets",
				'fr-fr': "Doux Partage",
				'es-es': "Dulce Compartir",
				'it-it': "Dolce Offerta",
				'pt-br': "Compartilhar Doces",
				'de-de': "Süße Gabe"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have each player draw a card.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez demander à chaque joueur de piocher une carte.",
				'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes hacer que cada jugador robe 1 carta.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi far pescare una carta a ciascun giocatore.",
				'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá fazer com que cada jogador compre 1 carta.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du beide Spieler veranlassen, 1 Karte zu ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
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
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "When it trusts a Trainer, it will treat them to berries it's decorated with cream."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511825,
				tcgplayer: 226489
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511825,
				tcgplayer: 226489
			}
		},
	],
}

export default card
