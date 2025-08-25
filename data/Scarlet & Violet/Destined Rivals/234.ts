import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [169],
	set: Set,

	name: {
		en: "Team Rocket's Crobat ex",
		fr: "Nostenfer-ex de la Team Rocket",
		de: "Team Rockets Iksbat-ex",
		it: "Crobat-ex del Team Rocket",
		es: "Crobat ex del Team Rocket",
		pt: "Crobat ex da Equipe Rocket",
		'es-mx': "Crobat ex del Equipo Rocket"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Biting Spree",
			fr: "Morsures Effrénées",
			de: "Bissiger Rausch",
			it: "Mordi Mordi",
			es: "Festival de Mordiscos",
			pt: "Mordidas Frenéticas",
			'es-mx': "Mordidas Seriales"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose 2 of your opponent's Pokémon and put 2 damage counters on each of them.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez choisir 2 des Pokémon de votre adversaire, puis placer 2 marqueurs de dégâts sur chacun d'eux.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 2 Pokémon deines Gegners wählen und 2 Schadensmarken auf jedes von ihnen legen.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scegliere due dei Pokémon del tuo avversario e mettere due segnalini danno su ciascuno di essi.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes elegir 2 de los Pokémon de tu rival y poner 2 contadores de daño en cada uno de ellos.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá escolher 2 dos Pokémon do seu oponente e colocar 2 contadores de dano em cada um deles.",
			'es-mx': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes elegir 2 de los Pokémon de tu rival y poner 2 contadores de daño en cada uno de ellos."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Assassin's Return",
			fr: "Retour de l'Assassin",
			de: "Meuchelrückkehr",
			it: "Ritorno dell'Assassino",
			es: "Retorno del Asesino",
			pt: "Retorno do Assassino",
			'es-mx': "Retorno del Asesino"
		},

		effect: {
			en: "You may put this Pokémon into your hand. (Discard all cards attached to this Pokémon.)",
			fr: "Vous pouvez ajouter ce Pokémon à votre main. (Défaussez toutes les cartes attachées à ce Pokémon.)",
			de: "Du kannst dieses Pokémon auf deine Hand nehmen. (Lege alle an dieses Pokémon angelegten Karten auf deinen Ablagestapel.)",
			it: "Puoi riprendere in mano questo Pokémon. Scarta tutte le carte assegnate a questo Pokémon.",
			es: "Puedes poner este Pokémon en tu mano. (Descarta todas las cartas unidas a este Pokémon).",
			pt: "Você pode colocar este Pokémon na sua mão. (Descarte todas as cartas ligadas a este Pokémon.)",
			'es-mx': "Puedes poner este Pokémon en tu mano. (Descarta todas las cartas unidas a este Pokémon)."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'holo'
		},
	]
}

export default card
