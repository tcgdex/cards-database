import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'es-es': "Magnezone",
		'it-it': "Magnezone",
		'pt-br': "Magnezone",
		'de-de': "Magnezone"
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
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Magnetic Circuit",
				'fr-fr': "Circuit Magnétique",
				'es-es': "Circuito Magnético",
				'it-it': "Circuito Magnetico",
				'pt-br': "Circuito Magnético",
				'de-de': "Magnetischer Kreislauf"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may attach a Lightning Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Lightning de votre main à l’un de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Lightning de tu mano a 1 de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi assegnare una carta Energia Lightning che hai in mano a uno dei tuoi Pokémon tutte le volte che vuoi.",
				'pt-br': "Tantas vezes quanto desejar durante a sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Lightning da sua mão a 1 dos seus Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Lightning-Energiekarte von deiner Hand an 1 deiner Pokémon anlegen."
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
				'en-us': "Zap Cannon",
				'fr-fr': "Élecanon",
				'es-es': "Electrocañón",
				'it-it': "Falcecannone",
				'pt-br': "Canhão Zap",
				'de-de': "Blitzkanone"
			},
			effect: {
				'en-us': "This Pokémon can’t use Zap Cannon during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Electrocañón durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Falcecannone.",
				'pt-br': "Este Pokémon não poderá usar Canhão Zap durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Blitzkanone während deines nächsten Zuges nicht einsetzen."
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

	description: {
		'en-us': "As it zooms through the sky, this Pokémon seems to be receiving signals of unknown origin, while transmitting signals of unknown purpose.",
	},

	thirdParty: {
		cardmarket: 355555,
		tcgplayer: 165687
	}
}

export default card
