import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [934],
	set: Set,

	name: {
		'en-us': "Garganacl ex",
		'fr-fr': "Gigansel-ex",
		'es-es': "Garganacl ex",
		'it-it': "Garganacl-ex",
		'pt-br': "Garganacl ex",
		'de-de': "Saltigant-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
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
			'en-us': "Salty Body",
			'fr-fr': "Corps Salé",
			'es-es': "Cuerpo Salino",
			'it-it': "Corpo di Sale",
			'pt-br': "Corpo Salino",
			'de-de': "Salziger Körper"
		},

		effect: {
			'en-us': "This Pokémon can't be affected by any Special Conditions.",
			'fr-fr': "Ce Pokémon ne peut être affecté par aucun État Spécial.",
			'es-es': "Este Pokémon no puede verse afectado por ninguna Condición Especial.",
			'it-it': "Questo Pokémon non può essere influenzato da condizioni speciali.",
			'pt-br': "Este Pokémon não pode ser afetado por quaisquer Condições Especiais.",
			'de-de': "Dieses Pokémon kann nicht von Speziellen Zuständen betroffen werden."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Block Hammer",
			'fr-fr': "Marteau Bloquant",
			'es-es': "Bloqueo Martillo",
			'it-it': "Bloccomartello",
			'pt-br': "Martelo Bloqueador",
			'de-de': "Blockhammer"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 60 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 60 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 60 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 60 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785943,
				tcgplayer: 567315
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card
