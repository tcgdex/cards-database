import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
		es: "Magnezone",
		it: "Magnezone",
		pt: "Magnezone",
		de: "Magnezone"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 150,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
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
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Lightning de votre main à l’un de vos Pokémon.",
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
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Zap Cannon",
				fr: "Élecanon",
				es: "Electrocañón",
				it: "Falcecannone",
				pt: "Canhão Zap",
				de: "Blitzkanone"
			},
			effect: {
				en: "This Pokémon can’t use Zap Cannon during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Electrocañón durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Falcecannone.",
				pt: "Este Pokémon não poderá usar Canhão Zap durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Blitzkanone während deines nächsten Zuges nicht einsetzen."
			},
			damage: 130,

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

	retreat: 2,

	thirdParty: {
		cardmarket: 355555
	}
}

export default card
