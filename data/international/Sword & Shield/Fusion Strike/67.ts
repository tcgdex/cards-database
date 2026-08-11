import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [368],
	set: Set,

	name: {
		'en-us': "Gorebyss",
		'fr-fr': "Rosabyss",
		'es-es': "Gorebyss",
		'it-it': "Gorebyss",
		'pt-br': "Gorebyss",
		'de-de': "Saganabyss"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
		'es-es': "Clamperl",
		'it-it': "Clamperl",
		'pt-br': "Clamperl",
		'de-de': "Perlu"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		'en-us': "It sucks bodily fluids out of its prey. The leftover meat sinks to the seafloor, where it becomes food for other Pokémon."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Rapid Strike Canceler",
			'fr-fr': "Inhibiteur de Mille Poings",
			'es-es': "Cancelador de Golpe Fluido",
			'it-it': "Annientamento Colpo Rapido",
			'de-de': "Fließender-Angriff-Abwehr",
			'pt-br': "Cancelador Golpe Fluido"
		},

		effect: {
			'en-us': "Your opponent's Rapid Strike Pokémon in play have no Abilities.",
			'fr-fr': "Les Pokémon Mille Poings en jeu de votre adversaire n'ont pas de talent.",
			'es-es': "Los Pokémon Golpe Fluido en juego de tu rival no tienen ninguna habilidad.",
			'it-it': "I Pokémon Colpo Rapido in gioco del tuo avversario non hanno abilità.",
			'de-de': "Die Fließender-Angriff-Pokémon deines Gegners im Spiel haben keine Fähigkeiten.",
			'pt-br': "Os Pokémon Golpe Fluido em jogo do seu oponente não têm Habilidades."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Draining Kiss",
			'fr-fr': "Vampibaiser",
			'es-es': "Beso Drenaje",
			'it-it': "Assorbibacio",
			'de-de': "Diebeskuss",
			'pt-br': "Beijo Drenante"
		},

		damage: 50,

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582201,
				tcgplayer: 253210
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582201,
				tcgplayer: 253210
			}
		},
	],
}

export default card
