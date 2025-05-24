import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Galopa",
		de: "Gallopa",
		es: "Rapidash",
		pt: "Rapidash",
		it: "Rapidash",
		en: "Rapidash"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		fr: "Ponyta",
		de: "Ponita",
		es: "Ponyta",
		pt: "Ponyta",
		it: "Ponyta",
		en: "Ponyta"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Coup de Chaleur",
			de: "Hitze-Boost",
			es: "Impulso Térmico",
			pt: "Impulso de Calor",
			it: "Carica Rovente",
			en: "Heat Boost"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez défausser une carte Énergie {R} de votre main pour pouvoir utiliser ce talent. Pendant ce tour, les attaques de vos Pokémon {R} infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			de: "Einmal während deines Zuges kannst du 1 {R}-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Während dieses Zuges fügen die Attacken deiner {R}-Pokémon dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			es: "Una vez durante tu turno, puedes descartar 1 carta de Energía {R} de tu mano para poder usar esta habilidad. Durante este turno, los ataques de tus Pokémon {R} hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			pt: "Uma vez durante o seu turno, você poderá descartar 1 carta de Energia {R} da sua mão para usar esta Habilidade. Durante este turno, os ataques dos seus Pokémon {R} causarão 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			it: "Una sola volta durante il tuo turno, puoi scartare una carta Energia {R} che hai in mano per usare questa abilità. Durante questo turno, gli attacchi dei tuoi Pokémon {R} infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			en: "Once during your turn, you may discard a {R} Energy card from your hand in order to use this Ability. During this turn, your {R} Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			fr: "Crinière de Feu",
			de: "Flammenmähne",
			es: "Crin de Fuego",
			pt: "Crina de Fogo",
			it: "Criniera di Fuoco",
			en: "Fire Mane"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind."
	}
}

export default card