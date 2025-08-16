import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

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
		"Metal",
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
				en: "As often as you like during your turn (before your attack), you may attach a Metal Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Metal de votre main à l’un de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Metal de tu mano a 1 de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon una carta Energia Metal dalla tua mano tutte le volte che vuoi.",
				pt: "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Metal da sua mão a 1 dos seus Pokémon.",
				de: "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 Metal-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
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
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 316010,
		tcgplayer: 157700
	}
}

export default card
