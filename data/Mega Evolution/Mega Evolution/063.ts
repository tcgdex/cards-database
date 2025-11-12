import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Grumpig",
		fr: "Groret",
		de: "Groink",
		it: "Grumpig",
		es: "Grumpig",
		pt: "Grumpig",
		'es-mx': "Grumpig"
	},

	illustrator: "cochi8i",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
		de: "Spoink",
		it: "Spoink",
		es: "Spoink",
		pt: "Spoink",
		'es-mx': "Spoink"
	},
	stage: "Stage1",
	dexId: [326],

	abilities: [{
		type: "Ability",

		name: {
			en: "Energized Steps",
			fr: "Pas Énergisés",
			de: "Energische Schritte",
			it: "Passi Energizzati",
			es: "Pasos Energéticos",
			pt: "Passos Energizados",
			'es-mx': "Pasos Energéticos"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Look at the top 4 cards of your deck and attach any number of Basic Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Regardez les 4 cartes du dessus de votre deck, puis attachez le nombre voulu de cartes Énergie de base que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Schau dir die obersten 4 Karten deines Decks an und lege beliebig viele Basis-Energiekarten, die du dort findest, beliebig an deine Pokémon an. Mische die anderen Karten zurück in dein Deck.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Guarda le prime quattro carte del tuo mazzo e assegna un numero qualsiasi di carte Energia base presenti tra esse ai tuoi Pokémon nel modo che preferisci. Rimischia le altre carte nel tuo mazzo.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Mira las 4 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Olhe as 4 cartas de cima do seu baralho e ligue qualquer número de cartas de Energia Básica que você encontrar lá aos seus Pokémon como desejar. Embaralhe as outras cartas de volta no seu baralho.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Mira las primeras 4 cartas de tu mazo y une cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon de la manera que quieras. Baraja el resto de las cartas de nuevo en tu mazo."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
			de: "Psychosphäre",
			it: "Psicosfera",
			es: "Esfera Psíquica",
			pt: "Esfera Psíquica",
			'es-mx': "Esfera Psíquica"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654402,
		cardmarket: 851134
	}
}

export default card