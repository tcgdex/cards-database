import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
		es: "Gothitelle",
		it: "Gothitelle",
		pt: "Gothitelle",
		de: "Morbitesse"
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
		en: "Gothorita",
		fr: "Mesmérella",
		es: "Gothorita",
		it: "Gothorita",
		pt: "Gothorita",
		de: "Hypnomorba"
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Mind Bend",
				fr: "Contrôleur d'Esprit",
				es: "Fusión Mental",
				it: "Fusione Mentale",
				pt: "Dobra Mentes",
				de: "Gedankenverbiegung"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Bend",
				fr: "Tordre",
				es: "Torcer",
				it: "Distorcere",
				pt: "Dobrar",
				de: "Verbiegung"
			},
			effect: {
				en: "Choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.",
				fr: "Choisissez 2 cartes au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes, puis les mélange avec son deck.",
				es: "Elige 2 cartas aleatorias de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
				it: "Scegli due carte a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel suo mazzo.",
				pt: "Escolha 2 cartas aleatórias da mão do seu oponente. Seu oponente revela aquelas cartas e as embaralha no próprio baralho.",
				de: "Wähle 2 zufällige Karten aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karten und mischt sie in sein Deck."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "It has tremendous psychic power, but it dislikes conflict. It's also able to predict the future based on the movement of the stars."
	}
}

export default card
