import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Frogadier",
		fr: "Croâporal",
		es: "Frogadier",
		it: "Frogadier",
		pt: "Frogadier",
		de: "Amphizel"
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		657,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gale Shuriken",
				fr: "Bourrasque Shuriken",
				es: "Torbellino Shuriken",
				it: "Lameraffica",
				pt: "Estrela Ninja de Tufão",
				de: "Shurikenwind"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 2 damage counters on 1 of your opponent’s Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Drip",
				fr: "Goutte à Goutte",
				es: "Goteo de Agua",
				it: "Gocciolacqua",
				pt: "Gotejo",
				de: "Spritzwasser"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
