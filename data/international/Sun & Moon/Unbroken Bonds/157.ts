import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Porygon-Z",
		'fr-fr': "Porygon-Z",
		'es-es': "Porygon-Z",
		'it-it': "Porygon-Z",
		'pt-br': "Porygon-Z",
		'de-de': "Porygon-Z"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Crazy Code",
				'fr-fr': "Code Fou",
				'es-es': "Código Loco",
				'it-it': "Codice Instabile",
				'pt-br': "Código Instável",
				'de-de': "Verrückter Code"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may attach a Special Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie spéciale de votre main à l’un de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Especial de tu mano a 1 de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon una carta Energia speciale dalla tua mano tutte le volte che vuoi.",
				'pt-br': "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Especial da sua mão a 1 dos seus Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 Spezial-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
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
				'en-us': "Tantrum",
				'fr-fr': "Mauvaise Humeur",
				'es-es': "Rabieta",
				'it-it': "Collera",
				'pt-br': "Petulância",
				'de-de': "Rappel"
			},
			effect: {
				'en-us': "This Pokémon is now Confused.",
				'fr-fr': "Ce Pokémon est maintenant Confus.",
				'es-es': "Este Pokémon pasa a estar Confundido.",
				'it-it': "Questo Pokémon viene confuso.",
				'pt-br': "Este Pokémon agora está Confuso.",
				'de-de': "Dieses Pokémon ist jetzt verwirrt."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its behavior is noticeably unstable, which is apparently due to the incompetence of the engineer who updated its programming.",
	},

	thirdParty: {
		cardmarket: 372445,
		tcgplayer: 189259
	}
}

export default card
