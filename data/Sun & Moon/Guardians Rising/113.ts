import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Bewear",
		fr: "Chelours",
		es: "Bewear",
		it: "Bewear",
		pt: "Bewear",
		de: "Kosturso"
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
		en: "Stufful",
		fr: "Nounourson",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rake It In",
				fr: "Ça Rapporte",
				es: "Forrarse",
				it: "Pigliatutto",
				pt: "Mina de Ouro",
				de: "Absahnen"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may draw 3 cards.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez piocher 3 cartes.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes robar 3 cartas.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi pescare tre carte.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode comprar 3 cartas.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 3 Karten ziehen."
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
				en: "Dangerous Blow",
				fr: "Coup Dangereux",
				es: "Golpe Peligroso",
				it: "Colpo Pericoloso",
				pt: "Golpe Perigoso",
				de: "Gefährlicher Schlag"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Basic Pokémon, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
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



}

export default card
