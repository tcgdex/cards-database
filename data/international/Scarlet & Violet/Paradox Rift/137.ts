import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [911],
	set: Set,

	name: {
		'en-us': "Skeledirge ex",
		'fr-fr': "Flâmigator-ex",
		'es-es': "Skeledirge ex",
		'it-it': "Skeledirge-ex",
		'pt-br': "Skeledirge ex",
		'de-de': "Skelokrok-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Crocalor",
		'fr-fr': "Crocogril",
		'es-es': "Crocalor",
		'it-it': "Crocalor",
		'pt-br': "Crocalor",
		'de-de': "Lokroko"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Incendiary Song",
			'fr-fr': "Chant Incendiaire",
			'es-es': "Canción Incendiaria",
			'it-it': "Canto Incendiario",
			'pt-br': "Canção Incendiária",
			'de-de': "Entfachendes Lied"
		},

		effect: {
			'en-us': "Once during your turn, you may discard a Basic {R} Energy card from your hand in order to use this Ability. During this turn, attacks used by your Pokémon do 60 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Une fois pendant votre tour, vous pouvez défausser une carte Énergie {R} de base de votre main pour utiliser ce talent. Pendant ce tour, les attaques utilisées par vos Pokémon infligent 60 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Una vez durante tu turno, puedes descartar 1 carta de Energía {R} Básica de tu mano para poder usar esta habilidad. Durante este turno, los ataques usados por tus Pokémon hacen 60 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Una sola volta durante il tuo turno, puoi scartare una carta Energia base {R} che hai in mano per usare questa abilità. Durante questo turno, gli attacchi usati dai tuoi Pokémon infliggono 60 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Uma vez durante o seu turno, você poderá descartar uma carta de Energia {R} Básica da sua mão para usar esta Habilidade. Durante este turno, os ataques usados pelos seus Pokémon causarão 60 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-{R}-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Während dieses Zuges fügen die von deinen Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Luster Burn",
			'fr-fr': "Brûlure Éclat",
			'es-es': "Quemadura Lustrosa",
			'it-it': "Brucialustro",
			'pt-br': "Queimadura de Esplendor",
			'de-de': "Glänzender Brand"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740675,
				tcgplayer: 523816,
				cardtrader: 265256
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
