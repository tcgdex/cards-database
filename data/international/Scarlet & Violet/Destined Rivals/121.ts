import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [42],
	set: Set,

	name: {
		'en-us': "Team Rocket's Golbat",
		'fr-fr': "Nosferalto de la Team Rocket",
		'de-de': "Team Rockets Golbat",
		'it-it': "Golbat del Team Rocket",
		'es-es': "Golbat del Team Rocket",
		'pt-br': "Golbat da Equipe Rocket",
		'es-mx': "Golbat del Equipo Rocket"
	},


	illustrator: "AKIRA EGAWA",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Team Rocket's Zubat",
		'fr-fr': "Nosferapti de la Team Rocket",
		'de-de': "Team Rockets Zubat",
		'it-it': "Zubat del Team Rocket",
		'es-es': "Zubat del Team Rocket",
		'pt-br': "Zubat da Equipe Rocket",
		'es-mx': "Zubat del Equipo Rocket"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sneaky Bite",
			'fr-fr': "Morsure Sournoise",
			'de-de': "Hinterhältiger Biss",
			'it-it': "Morso Furtivo",
			'es-es': "Mordisco Furtivo",
			'pt-br': "Mordida Traiçoeira",
			'es-mx': "Mordida Furtiva"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes poner 2 contadores de daño en uno de los Pokémon de tu rival.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
			'es-mx': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival."
		}
	}],

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Confuse Ray",
			'fr-fr': "Onde Folie",
			'de-de': "Konfusstrahl",
			'it-it': "Stordiraggio",
			'es-es': "Rayo Confuso",
			'pt-br': "Raio da Confusão",
			'es-mx': "Rayo de Confusión"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
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
				cardmarket: 825995,
				tcgplayer: 632929
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825995,
				tcgplayer: 632929
			}
		},
	],
}

export default card
