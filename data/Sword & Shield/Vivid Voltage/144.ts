import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Trumbeak",
		fr: "Piclairon",
		es: "Trumbeak",
		it: "Trumbeak",
		pt: "Trumbeak",
		de: "Trompeck"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pikipek",
		fr: "Picassaut",
		es: "Pikipek",
		it: "Pikipek",
		pt: "Pikipek",
		de: "Peppeck"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Charging Trumpet",
				fr: "Assaut Claironnant",
				es: "Trompeta de Carga",
				it: "Caricatromba",
				pt: "Trompete de Ataque",
				de: "Trompetenansturm"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may look at the top 3 cards of your deck and attach any number of basic Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez regarder les 3 cartes du dessus de votre deck, puis attacher le nombre désiré de cartes Énergie de base que vous y trouvez à vos Pokémon comme il vous plaît. Mélangez les autres cartes avec votre deck.",
				es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes mirar las 3 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi guardare le prime tre carte del tuo mazzo e assegnare un numero qualsiasi di carte Energia base presenti tra esse ai tuoi Pokémon nel modo che preferisci. Rimischia le altre carte nel tuo mazzo.",
				pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá olhar as 3 cartas de cima do seu baralho e ligar qualquer número de cartas de Energia básica que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du dir die obersten 3 Karten deines Decks anschauen und beliebig viele Basis-Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Mische die anderen Karten zurück in dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Peck",
				fr: "Bec Vrille",
				es: "Pico Taladro",
				it: "Perforbecco",
				pt: "Bico Broca",
				de: "Bohrschnabel"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
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
		en: "From its mouth, it fires the seeds of berries it has eaten. The scattered seeds give rise to new plants."
	}
}

export default card
