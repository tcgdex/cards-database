import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours",
		'es-es': "Bewear",
		'it-it': "Bewear",
		'pt-br': "Bewear",
		'de-de': "Kosturso"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		760,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Rake It In",
				'fr-fr': "Ça Rapporte",
				'es-es': "Forrarse",
				'it-it': "Pigliatutto",
				'pt-br': "Mina de Ouro",
				'de-de': "Absahnen"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may draw 3 cards.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez piocher 3 cartes.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes robar 3 cartas.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi pescare tre carte.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode comprar 3 cartas.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 3 Karten ziehen."
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
				'en-us': "Dangerous Blow",
				'fr-fr': "Coup Dangereux",
				'es-es': "Golpe Peligroso",
				'it-it': "Colpo Pericoloso",
				'pt-br': "Golpe Perigoso",
				'de-de': "Gefährlicher Schlag"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Basic Pokémon, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This immensely dangerous Pokémon possesses overwhelming physical strength. Its habitat is generally off-limits.",
	},

	thirdParty: {
		cardmarket: 297565,
		tcgplayer: 131031
	}
}

export default card
