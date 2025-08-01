import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
		es: "Magnezone",
		it: "Magnezone",
		pt: "Magnezone",
		de: "Magnezone"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
		es: "Magneton",
		it: "Magneton",
		pt: "Magneton",
		de: "Magneton"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Magnetic Circuit",
				fr: "Circuit Magnétique",
				es: "Circuito Magnético",
				it: "Circuito Magnetico",
				pt: "Circuito Magnético",
				de: "Magnetischer Kreislauf"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Lightning Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Lightning de votre main à l'un de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Lightning de tu mano a 1 de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi assegnare una carta Energia Lightning che hai in mano a uno dei tuoi Pokémon tutte le volte che vuoi.",
				pt: "Tantas vezes quanto desejar durante a sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Lightning da sua mão a 1 dos seus Pokémon.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Lightning-Energiekarte von deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Blast",
				fr: "Grondement de Tonnerre",
				es: "Estallido Trueno",
				it: "Tuonobomba",
				pt: "Explosão de Trovões",
				de: "Donnerkeil"
			},
			effect: {
				en: "Discard a Lightning Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Lightning attachée à ce Pokémon.",
				es: "Descarta 1 Energía Lightning unida a este Pokémon.",
				it: "Scarta un'Energia Lightning assegnata a questo Pokémon.",
				pt: "Descarte uma Energia Lightning ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Lightning-Energie auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 286300
	}
}

export default card
