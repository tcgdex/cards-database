import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [609],
	set: Set,

	name: {
		'en-us': "Chandelure VMAX",
		'fr-fr': "Lugulabre VMAX",
		'es-es': "Chandelure VMAX",
		'it-it': "Chandelure VMAX",
		'pt-br': "Chandelure VMAX",
		'de-de': "Skelabra VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Chandelure V",
		'fr-fr': "Lugulabre-V",
		'es-es': "Chandelure V",
		'it-it': "Chandelure-V",
		'pt-br': "Chandelure V",
		'de-de': "Skelabra-V"
	},

	stage: "VMAX",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "AKIRA EGAWA",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cursed Shimmer",
			'fr-fr': "Scintillement Maudit",
			'de-de': "Flimmernder Fluch",
			'es-es': "Destello Maldito",
			'pt-br': "Brilho Amaldiçoado",
			'it-it': "Luccichio Maledetto"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent can't play any Pokémon Tool cards from their hand.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Outil Pokémon de sa main.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Pokémon-Ausrüstungen aus seiner Hand spielen.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Herramienta Pokémon de su mano.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhuma carta de Ferramenta Pokémon da própria mão.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Oggetto Pokémon che ha in mano."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Max Poltergeist",
			'fr-fr': "Esprit Frappeuromax",
			'de-de': "Dyna-Poltergeist",
			'es-es': "Maxipoltergeist",
			'pt-br': "Poltergeist Max",
			'it-it': "Dynapoltergeist"
		},

		damage: "70×",

		effect: {
			'en-us': "Your opponent reveals their hand. This attack does 70 damage for each Trainer card you find there.",
			'fr-fr': "Votre adversaire dévoile sa main. Cette attaque inflige 70 dégâts pour chaque carte Dresseur que vous y trouvez.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 70 Schadenspunkte zu.",
			'es-es': "Tu rival enseña las cartas de su mano. Este ataque hace 70 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
			'pt-br': "Seu oponente revela a própria mão. Este ataque causa 70 pontos de dano para cada carta de Treinador que encontrar lá.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 70 danni per ogni carta Allenatore presente tra quelle carte."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 583008,
				tcgplayer: 253167
			}
		},
	],
}

export default card
