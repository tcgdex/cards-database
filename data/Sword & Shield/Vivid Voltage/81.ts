import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [869],

	name: {
		en: "Alcremie",
		fr: "Charmilly",
		es: "Alcremie",
		it: "Alcremie",
		pt: "Alcremie",
		de: "Pokusan"
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
		en: "Milcery",
		fr: "Crèmy",
		es: "Milcery",
		it: "Milcery",
		pt: "Milcery",
		de: "Hokumil"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sharing Sweets",
				fr: "Doux Partage",
				es: "Dulce Compartir",
				it: "Dolce Offerta",
				pt: "Compartilhar Doces",
				de: "Süße Gabe"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have each player draw a card.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez demander à chaque joueur de piocher une carte.",
				es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes hacer que cada jugador robe 1 carta.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi far pescare una carta a ciascun giocatore.",
				pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá fazer com que cada jogador compre 1 carta.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du beide Spieler veranlassen, 1 Karte zu ziehen."
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
				en: "Wonder Shine",
				fr: "Éclat Merveilleux",
				es: "Brillo Prodigioso",
				it: "Luce Meraviglia",
				pt: "Brilho Encantado",
				de: "Wunderglanz"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "When it trusts a Trainer, it will treat them to berries it's decorated with cream."
	},

	thirdParty: {
		cardmarket: 511825
	}
}

export default card
