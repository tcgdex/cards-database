import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [78],
	set: Set,

	name: {
		en: "Rapidash",
		fr: "Galopa",
		es: "Rapidash",
		it: "Rapidash",
		pt: "Rapidash",
		de: "Gallopa"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
		es: "Ponyta",
		it: "Ponyta",
		pt: "Ponyta",
		de: "Ponita"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Heat Boost",
			fr: "Coup de Chaleur",
			es: "Impulso Térmico",
			it: "Carica Rovente",
			pt: "Impulso de Calor",
			de: "Hitze-Boost"
		},

		effect: {
			en: "Once during your turn, you may discard a Fire Energy card from your hand in order to use this Ability. During this turn, your Fire Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Une fois pendant votre tour, vous pouvez défausser une carte Énergie Fire de votre main pour pouvoir utiliser ce talent. Pendant ce tour, les attaques de vos Pokémon Fire infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Una vez durante tu turno, puedes descartar 1 carta de Energía Fire de tu mano para poder usar esta habilidad. Durante este turno, los ataques de tus Pokémon Fire hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Una sola volta durante il tuo turno, puoi scartare una carta Energia Fire che hai in mano per usare questa abilità. Durante questo turno, gli attacchi dei tuoi Pokémon Fire infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Uma vez durante o seu turno, você poderá descartar 1 carta de Energia Fire da sua mão para usar esta Habilidade. Durante este turno, os ataques dos seus Pokémon Fire causarão 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Einmal während deines Zuges kannst du 1 Fire-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Während dieses Zuges fügen die Attacken deiner Fire-Pokémon dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Fire Mane",
			fr: "Crinière de Feu",
			es: "Crin de Fuego",
			it: "Criniera di Fuoco",
			pt: "Crina de Fogo",
			de: "Flammenmähne"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682063
	}
}

export default card
