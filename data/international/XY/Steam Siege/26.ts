import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Volcanion EX",
		'fr-fr': "Volcanion EX",
		'es-es': "Volcanion EX",
		'it-it': "Volcanion EX",
		'pt-br': "Volcanion EX",
		'de-de': "Volcanion EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		721,
	],

	hp: 180,

	types: [
		"Fire",
		"Water",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Steam Up",
				'fr-fr': "Jets Vapeur",
				'es-es': "Empañar",
				'it-it': "Tuttovapore",
				'pt-br': "Vaporizar",
				'de-de': "Dampfdruck"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, during this turn, your Basic Fire Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Fire de votre main. Dans ce cas, pendant ce tour, les attaques de vos Pokémon Fire de base infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de Energía Fire de tu mano. Si lo haces, durante este turno, los ataques de tus Pokémon Fire Básicos hacen 30 puntos de daños más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Energia Fire dalla tua mano. Se lo fai, durante questo turno gli attacchi dei tuoi Pokémon Base Fire infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode descartar um card de Energia Fire da sua mão. Se fizer isso, durante esta vez de jogar, os ataques dos seus Pokémon Fire Básicos causarão 30 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff), kannst du 1 Fire-Energiekarte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, fügen die Angriffe deiner Basis-Fire-Pokémon dem Aktiven Pokémon deines Gegners während dieses Zuges 30 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Volcanic Heat",
				'fr-fr': "Chaleur Volcanique",
				'es-es': "Calor Volcánico",
				'it-it': "Calore Vulcanico",
				'pt-br': "Calor Vulcânico",
				'de-de': "Vulkanhitze"
			},
			effect: {
				'en-us': "This Pokémon can't attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 363930,
		tcgplayer: 120151
	}
}

export default card
