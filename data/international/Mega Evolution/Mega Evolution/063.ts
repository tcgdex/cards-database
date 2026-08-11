import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Grumpig",
		'fr-fr': "Groret",
		'de-de': "Groink",
		'it-it': "Grumpig",
		'es-es': "Grumpig",
		'pt-br': "Grumpig",
		'es-mx': "Grumpig"
	},

	illustrator: "cochi8i",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
		'de-de': "Spoink",
		'it-it': "Spoink",
		'es-es': "Spoink",
		'pt-br': "Spoink",
		'es-mx': "Spoink"
	},
	stage: "Stage1",
	dexId: [326],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Energized Steps",
			'fr-fr': "Pas Énergisés",
			'de-de': "Energische Schritte",
			'it-it': "Passi Energizzati",
			'es-es': "Pasos Energéticos",
			'pt-br': "Passos Energizados",
			'es-mx': "Pasos Energéticos"
		},

		effect: {
			'en-us': "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Look at the top 4 cards of your deck and attach any number of Basic Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			'fr-fr': "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Regardez les 4 cartes du dessus de votre deck, puis attachez le nombre voulu de cartes Énergie de base que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			'de-de': "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Schau dir die obersten 4 Karten deines Decks an und lege beliebig viele Basis-Energiekarten, die du dort findest, beliebig an deine Pokémon an. Mische die anderen Karten zurück in dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Guarda le prime quattro carte del tuo mazzo e assegna un numero qualsiasi di carte Energia base presenti tra esse ai tuoi Pokémon nel modo che preferisci. Rimischia le altre carte nel tuo mazzo.",
			'es-es': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Mira las 4 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'pt-br': "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Olhe as 4 cartas de cima do seu baralho e ligue qualquer número de cartas de Energia Básica que você encontrar lá aos seus Pokémon como desejar. Embaralhe as outras cartas de volta no seu baralho.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Mira las primeras 4 cartas de tu mazo y une cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon de la manera que quieras. Baraja el resto de las cartas de nuevo en tu mazo."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Psychic Sphere",
			'fr-fr': "Sphère Psy",
			'de-de': "Psychosphäre",
			'it-it': "Psicosfera",
			'es-es': "Esfera Psíquica",
			'pt-br': "Esfera Psíquica",
			'es-mx': "Esfera Psíquica"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851134,
				tcgplayer: 654402
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851134,
				tcgplayer: 654402
			}
		},
	],
}

export default card
