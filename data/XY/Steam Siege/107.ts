import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Volcanion EX",
		fr: "Volcanion EX",
		es: "Volcanion EX",
		it: "Volcanion EX",
		pt: "Volcanion EX",
		de: "Volcanion EX"
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
				en: "Steam Up",
				fr: "Jets Vapeur",
				es: "Empañar",
				it: "Tuttovapore",
				pt: "Vaporizar",
				de: "Dampfdruck"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, during this turn, your Basic Fire Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Fire de votre main. Dans ce cas, pendant ce tour, les attaques de vos Pokémon Fire de base infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de Energía Fire de tu mano. Si lo haces, durante este turno, los ataques de tus Pokémon Fire Básicos hacen 30 puntos de daños más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Energia Fire dalla tua mano. Se lo fai, durante questo turno gli attacchi dei tuoi Pokémon Base Fire infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode descartar um card de Energia Fire da sua mão. Se fizer isso, durante esta vez de jogar, os ataques dos seus Pokémon Fire Básicos causarão 30 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				de: "Einmal während deines Zuges (vor deinem Angriff), kannst du 1 Fire-Energiekarte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, fügen die Angriffe deiner Basis-Fire-Pokémon dem Aktiven Pokémon deines Gegners während dieses Zuges 30 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
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
				en: "Volcanic Heat",
				fr: "Chaleur Volcanique",
				es: "Calor Volcánico",
				it: "Calore Vulcanico",
				pt: "Calor Vulcânico",
				de: "Vulkanhitze"
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
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
		cardmarket: 290990
	}
}

export default card
