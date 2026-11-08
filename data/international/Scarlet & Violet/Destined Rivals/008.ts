import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [407],
	set: Set,

	name: {
		'en-us': "Cynthia's Roserade",
		'fr-fr': "Roserade de Cynthia",
		'de-de': "Cynthias Roserade",
		'it-it': "Roserade di Camilla",
		'es-es': "Roserade de Cintia",
		'pt-br': "Roserade da Cíntia",
		'es-mx': "Roserade de Cynthia"
	},

	illustrator: "En Morikura",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Cynthia's Roselia",
		'fr-fr': "Rosélia de Cynthia",
		'de-de': "Cynthias Roselia",
		'it-it': "Roselia di Camilla",
		'es-es': "Roselia de Cintia",
		'pt-br': "Roselia da Cíntia",
		'es-mx': "Roselia de Cynthia"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cheer On to Glory",
			'fr-fr': "Encouragement pour la Gloire",
			'de-de': "Ruhmesbeifall",
			'it-it': "Tifo Esaltante",
			'es-es': "Ovación de Gloria",
			'pt-br': "Grito de Glória",
			'es-mx': "Canto de Gloria"
		},

		effect: {
			'en-us': "Attacks used by your Cynthia's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques utilisées par vos Pokémon de Cynthia infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Die von deinen Cynthias Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Gli attacchi usati dai tuoi Pokémon di Camilla infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'es-es': "Los ataques usados por tus Pokémon de Cintia hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Os ataques usados pelos seus Pokémon da Cíntia causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Los ataques usados por tus Pokémon de Cynthia hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Leaf Step",
			'fr-fr': "Enjambée de Feuillage",
			'de-de': "Blattschritt",
			'it-it': "Passofoglia",
			'es-es': "Paso Hoja",
			'pt-br': "Passo de Folha",
			'es-mx': "Paso de Hoja"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825882,
				tcgplayer: 630804
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825882,
				tcgplayer: 630804
			}
		},
	],
}

export default card
