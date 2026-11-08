import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kadabra",
		'fr-fr': "Kadabra",
		'de-de': "Kadabra",
		'it-it': "Kadabra",
		'es-es': "Kadabra",
		'pt-br': "Kadabra",
		'es-mx': "Kadabra"
	},

	illustrator: "Saboteri",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Abra",
		'fr-fr': "Abra",
		'de-de': "Abra",
		'it-it': "Abra",
		'es-es': "Abra",
		'pt-br': "Abra",
		'es-mx': "Abra"
	},
	stage: "Stage1",
	dexId: [64],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Psychic Draw",
			'fr-fr': "Pioche Psy",
			'de-de': "Psycho-Ziehen",
			'it-it': "Pesca Psichica",
			'es-es': "Robo Psíquico",
			'pt-br': "Compra Psíquica",
			'es-mx': "Robo Psíquico"
		},

		effect: {
			'en-us': "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Draw 2 cards.",
			'fr-fr': "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Piochez 2 cartes.",
			'de-de': "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Ziehe 2 Karten.",
			'it-it': "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Pesca due carte.",
			'es-es': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Roba 2 cartas.",
			'pt-br': "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Compre 2 cartas.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Roba 2 cartas."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'de-de': "Super-Psischlag",
			'it-it': "Superpsico",
			'es-es': "Superrayo Psi",
			'pt-br': "Super-raio Psíquico",
			'es-mx': "Superpsicotrueno"
		},

		damage: 30
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
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851126,
				tcgplayer: 654394
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851126,
				tcgplayer: 654394
			}
		},
	],
}

export default card
