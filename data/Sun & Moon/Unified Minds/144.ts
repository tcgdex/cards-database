import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 80,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Prowl",
				fr: "Rôder",
				es: "Merodear",
				it: "Girovagare",
				pt: "Espreitar",
				de: "Pirschen"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez chercher une carte dans votre deck, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes buscar en tu baraja 1 carta y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi cercare nel tuo mazzo una carta e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode procurar por 1 carta no seu baralho e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du dein Deck nach 1 Karte durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				es: "Tornado",
				it: "Raffica",
				pt: "Lufada de Vento",
				de: "Windstoß"
			},

			damage: 40,

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

	retreat: 0
}

export default card
