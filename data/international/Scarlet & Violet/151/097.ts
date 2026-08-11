import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [97],
	set: Set,

	name: {
		'fr-fr': "Hypnomade",
		'en-us': "Hypno",
		'es-es': "Hypno",
		'it-it': "Hypno",
		'pt-br': "Hypno",
		'de-de': "Hypno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Soporifik",
		'en-us': "Drowzee",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Hypnose Soudaine",
			'en-us': "Here for Hypnosis",
			'es-es': "Toma Hipnosis",
			'it-it': "Pronta Ipnosi",
			'pt-br': "Aqui para Hipnotizar",
			'de-de': "Hypnosetermin"
		},

		effect: {
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Endormi.",
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may make your opponent's Active Pokémon Asleep.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Dormido.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario addormentato.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Adormecido.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du das Aktive Pokémon deines Gegners einschlafen lassen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'fr-fr': "Super Psy",
			'en-us': "Super Psy Bolt",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'pt-br': "Super-raio Psíquico",
			'de-de': "Super-Psischlag"
		},

		damage: 110
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
	regulationMark: "G",

	description: {
		'en-us': "When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733692,
				tcgplayer: 516666,
				cardtrader: 261185
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733692,
				tcgplayer: 516666,
				cardtrader: 261185
			}
		},
	],

	illustrator: "Mousho",

	
}

export default card
