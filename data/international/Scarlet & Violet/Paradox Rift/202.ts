import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [934],
	set: Set,

	name: {
		'en-us': "Garganacl",
		'fr-fr': "Gigansel",
		'es-es': "Garganacl",
		'it-it': "Garganacl",
		'pt-br': "Garganacl",
		'de-de': "Saltigant"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Naclstack",
		'fr-fr': "Amassel",
		'es-es': "Naclstack",
		'it-it': "Naclstack",
		'pt-br': "Naclstack",
		'de-de': "Sedisal"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Energizing Rock Salt",
			'fr-fr': "Halite Énergisante",
			'es-es': "Halita Vigorizante",
			'it-it': "Salgemma Energizzante",
			'pt-br': "Pedra de Sal Energizante",
			'de-de': "Energiespendendes Steinsalz"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Basic {F} Energy card from your discard pile to 1 of your Pokémon. If you attached Energy to a Pokémon in this way, heal 30 damage from that Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {F} de base de votre pile de défausse à l'un de vos Pokémon. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, soignez 30 dégâts de ce Pokémon-là.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía {F} Básica de tu pila de descartes a uno de tus Pokémon. Si has unido Energía a un Pokémon de esta manera, cura 30 puntos de daño a ese Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base {F} dalla tua pila degli scarti. Se hai assegnato dell'Energia a un Pokémon in questo modo, cura quel Pokémon da 30 danni.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar uma carta de Energia {F} Básica da sua pilha de descarte a 1 dos seus Pokémon. Se você ligou Energia a um Pokémon desta forma, cure 30 pontos de dano daquele Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-{F}-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, heile 30 Schadenspunkte bei jenem Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre",
			'es-es': "Aterrizaje",
			'it-it': "Schiacciaterra",
			'pt-br': "Aperto de Terra",
			'de-de': "Schollenbrecher"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "Garganacl will rub its fingertips together and sprinkle injured Pokémon with salt. Even severe wounds will promptly heal afterward.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740745,
				tcgplayer: 523883,
				cardtrader: 265517
			}
		},
	],

	illustrator: "kodama",

	
}

export default card
