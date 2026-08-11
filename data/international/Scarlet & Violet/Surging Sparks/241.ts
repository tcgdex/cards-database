import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [1018],
	set: Set,

	name: {
		'en-us': "Archaludon ex",
		'fr-fr': "Pondralugon-ex",
		'es-es': "Archaludon ex",
		'it-it': "Archaludon-ex",
		'pt-br': "Archaludon ex",
		'de-de': "Briduradon-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Duraludon",
		'fr-fr': "Duralugon",
		'es-es': "Duraludon",
		'it-it': "Duraludon",
		'pt-br': "Duraludon",
		'de-de': "Duraludon"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Assemble Alloy",
			'fr-fr': "Assemblage d'Alliage",
			'es-es': "Montaje Aleación",
			'it-it': "Assemblametallo",
			'pt-br': "Montagem de Liga Metálica",
			'de-de': "Legieren"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach up to 2 Basic {M} Energy cards from your discard pile to your {M} Pokémon in any way you like.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {M} de base de votre pile de défausse à vos Pokémon {M}, comme il vous plaît.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes unir hasta 2 cartas de Energía {M} Básica de tu pila de descartes a tus Pokémon {M} de la manera que desees.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi assegnare ai tuoi Pokémon {M} fino a due carte Energia base {M} dalla tua pila degli scarti nel modo che preferisci.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá ligar até 2 cartas de Energia {M} Básica da sua pilha de descarte aos seus Pokémon {M} como desejar.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du bis zu 2 Basis-{M}-Energiekarten aus deinem Ablagestapel beliebig an deine {M}-Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal"],

		name: {
			'en-us': "Metal Defender",
			'fr-fr': "Défense Métallique",
			'es-es': "Defensor Metálico",
			'it-it': "Metalloscudo",
			'pt-br': "Defensor Metálico",
			'de-de': "Metallverteidiger"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon has no Weakness.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
			'es-es': "Durante el próximo turno de tu rival, este Pokémon no tiene ninguna Debilidad.",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon non ha debolezza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon não terá Fraqueza.",
			'de-de': "Während des nächsten Zuges deines Gegners hat dieses Pokémon keine Schwäche."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794614,
				tcgplayer: 589869
			}
		},
	],

	suffix: "ex",
	illustrator: "Shinya Mizuno",

}

export default card
