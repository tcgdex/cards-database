import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Florges",
		fr: "Florges",
		es: "Florges",
		it: "Florges",
		pt: "Florges",
		de: "Florges"
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
		en: "Floette",
		fr: "Floette",
		es: "Floette",
		it: "Floette",
		pt: "Floette",
		de: "Floette"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Calming Aroma",
				fr: "Arôme Apaisant",
				es: "Aroma Tranquilizador",
				it: "Aroma Distensivo",
				pt: "Aroma Calmante",
				de: "Beruhigendes Aroma"
			},
			effect: {
				en: "Each of your Pokémon's attacks costs Fairy less.",
				fr: "Chacune des attaques de vos Pokémon coûte Fairy de moins.",
				es: "Los ataques de tus Pokémon cuestan Fairy menos.",
				it: "Ciascuno degli attacchi dei tuoi Pokémon costa Fairy in meno",
				pt: "Os ataques de cada um dos seus Pokémon custam Fairy a menos.",
				de: "Die Angriffskosten jedes Angriffs deiner Pokémon verringern sich um Fairy."
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

	thirdParty: {
		cardmarket: 286349
	}
}

export default card
