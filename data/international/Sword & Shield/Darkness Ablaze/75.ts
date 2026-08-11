import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [576],

	name: {
		'en-us': "Gothitelle",
		'fr-fr': "Sidérella",
		'es-es': "Gothitelle",
		'it-it': "Gothitelle",
		'pt-br': "Gothitelle",
		'de-de': "Morbitesse"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gothorita",
		'fr-fr': "Mesmérella",
		'es-es': "Gothorita",
		'it-it': "Gothorita",
		'pt-br': "Gothorita",
		'de-de': "Hypnomorba"
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Mind Bend",
				'fr-fr': "Contrôleur d'Esprit",
				'es-es': "Fusión Mental",
				'it-it': "Fusione Mentale",
				'pt-br': "Dobra Mentes",
				'de-de': "Gedankenverbiegung"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Bend",
				'fr-fr': "Tordre",
				'es-es': "Torcer",
				'it-it': "Distorcere",
				'pt-br': "Dobrar",
				'de-de': "Verbiegung"
			},
			effect: {
				'en-us': "Choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.",
				'fr-fr': "Choisissez 2 cartes au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes, puis les mélange avec son deck.",
				'es-es': "Elige 2 cartas aleatorias de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
				'it-it': "Scegli due carte a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel suo mazzo.",
				'pt-br': "Escolha 2 cartas aleatórias da mão do seu oponente. Seu oponente revela aquelas cartas e as embaralha no próprio baralho.",
				'de-de': "Wähle 2 zufällige Karten aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karten und mischt sie in sein Deck."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "It has tremendous psychic power, but it dislikes conflict. It's also able to predict the future based on the movement of the stars."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483254,
				tcgplayer: 219454
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483254,
				tcgplayer: 219454
			}
		},
	],
}

export default card
