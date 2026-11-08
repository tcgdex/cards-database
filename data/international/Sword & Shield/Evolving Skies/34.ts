import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Ludicolo",
		'fr-fr': "Ludicolo",
		'es-es': "Ludicolo",
		'it-it': "Ludicolo",
		'pt-br': "Ludicolo",
		'de-de': "Kappalores"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage2",
	illustrator: "sowsow",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Enthusiastic Dance",
			'fr-fr': "Danse Enthousiaste",
			'es-es': "Danza Entusiasta",
			'it-it': "Danza Entusiasmante",
			'pt-br': "Enthusiastic Dance",
			'de-de': "Ausgelassener Tanz"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may use this Ability. During this turn, your Basic Pokémon's attacks do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez utiliser ce talent. Pendant ce tour, les attaques de vos Pokémon de base infligent 100 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes usar esta habilidad. Durante este turno, los ataques de tus Pokémon Básicos hacen 100 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi usare questa abilità. Durante questo turno, gli attacchi dei tuoi Pokémon Base infliggono 100 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may use this Ability. During this turn, your Basic Pokémon's attacks do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Während dieses Zuges fügen die Attacken deiner Basis-Pokémon dem Aktiven Pokémon deines Gegners 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Wave Splash",
			'de-de': "Wellenplatscher"
		},

		damage: 120,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'es-es': "Lombre",
		'it-it': "Lombre",
		'pt-br': "Lombre",
		'de-de': "Lombrero"
	},

	description: {
		'en-us': "If it hears festive music, it begins moving in rhythm in order to amplify its power."
	},

	dexId: [272],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574058,
				tcgplayer: 246834
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574058,
				tcgplayer: 246834
			}
		},
	],
}

export default card
