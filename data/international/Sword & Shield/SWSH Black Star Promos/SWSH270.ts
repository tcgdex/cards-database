import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [78],
	set: Set,

	name: {
		'fr-fr': "Galopa",
		'de-de': "Gallopa",
		'es-es': "Rapidash",
		'pt-br': "Rapidash",
		'it-it': "Rapidash",
		'en-us': "Rapidash"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		'fr-fr': "Ponyta",
		'de-de': "Ponita",
		'es-es': "Ponyta",
		'pt-br': "Ponyta",
		'it-it': "Ponyta",
		'en-us': "Ponyta"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Coup de Chaleur",
			'de-de': "Hitze-Boost",
			'es-es': "Impulso Térmico",
			'pt-br': "Impulso de Calor",
			'it-it': "Carica Rovente",
			'en-us': "Heat Boost"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez défausser une carte Énergie {R} de votre main pour pouvoir utiliser ce talent. Pendant ce tour, les attaques de vos Pokémon {R} infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Einmal während deines Zuges kannst du 1 {R}-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Während dieses Zuges fügen die Attacken deiner {R}-Pokémon dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'es-es': "Una vez durante tu turno, puedes descartar 1 carta de Energía {R} de tu mano para poder usar esta habilidad. Durante este turno, los ataques de tus Pokémon {R} hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Uma vez durante o seu turno, você poderá descartar 1 carta de Energia {R} da sua mão para usar esta Habilidade. Durante este turno, os ataques dos seus Pokémon {R} causarão 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'it-it': "Una sola volta durante il tuo turno, puoi scartare una carta Energia {R} che hai in mano per usare questa abilità. Durante questo turno, gli attacchi dei tuoi Pokémon {R} infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'en-us': "Once during your turn, you may discard a {R} Energy card from your hand in order to use this Ability. During this turn, your {R} Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Crinière de Feu",
			'de-de': "Flammenmähne",
			'es-es': "Crin de Fuego",
			'pt-br': "Crina de Fogo",
			'it-it': "Criniera di Fuoco",
			'en-us': "Fire Mane"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind."
	},

	thirdParty: {
		cardmarket: 681799
	}
}

export default card
