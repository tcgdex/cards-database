import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [42],
	set: Set,

	name: {
		en: "Team Rocket's Golbat",
		fr: "Nosferalto de la Team Rocket",
		de: "Team Rockets Golbat",
		it: "Golbat del Team Rocket",
		es: "Golbat del Team Rocket",
		pt: "Golbat da Equipe Rocket",
		'es-mx': "Golbat del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sneaky Bite",
			fr: "Morsure Sournoise",
			de: "Hinterhältiger Biss",
			it: "Morso Furtivo",
			es: "Mordisco Furtivo",
			pt: "Mordida Traiçoeira",
			'es-mx': "Mordida Furtiva"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes poner 2 contadores de daño en uno de los Pokémon de tu rival.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
			'es-mx': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival."
		}
	}],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
			de: "Konfusstrahl",
			it: "Stordiraggio",
			es: "Rayo Confuso",
			pt: "Raio da Confusão",
			'es-mx': "Rayo de Confusión"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
