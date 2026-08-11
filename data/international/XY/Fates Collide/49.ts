import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Carbink",
		'fr-fr': "Strassie",
		'es-es': "Carbink",
		'it-it': "Carbink",
		'pt-br': "Carbink",
		'de-de': "Rocara"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		703,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Energy Keeper",
				'fr-fr': "Gardien d'Énergie",
				'es-es': "Conservación de Energía",
				'it-it': "Conservenergia",
				'pt-br': "Guardião de Energia",
				'de-de': "Energiehüter"
			},
			effect: {
				'en-us': "Basic Energy attached to your Basic Pokémon can't be discarded by effects of your opponent's attacks, Abilities, or Trainer cards.",
				'fr-fr': "Les Énergies de base attachées à vos Pokémon de base ne peuvent pas être défaussées par les effets des attaques, des talents ou des cartes Dresseur de votre adversaire.",
				'es-es': "Las Energías Básicas unidas a tus Pokémon Básicos no pueden descartarse por efectos de los ataques, habilidades o cartas de Entrenador de tu rival.",
				'it-it': "Le Energie base assegnate ai tuoi Pokémon Base non possono essere scartate per effetto degli attacchi, delle abilità o delle carte Allenatore del tuo avversario.",
				'pt-br': "As Energias básicas ligadas ao seu Pokémon Básico não podem ser descartadas por efeitos de ataques, Habilidades ou cards de Treinador do seu oponente.",
				'de-de': "An Basis-Pokémon angelegte Basis-Energien können durch die Effekte von gegnerischen Angriffen, Fähigkeiten oder Trainerkarten nicht auf deinen Ablagestapel befördert werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Stone Edge",
				'fr-fr': "Lame de Roc",
				'es-es': "Roca Afilada",
				'it-it': "Pietrataglio",
				'pt-br': "Gume de Pedra",
				'de-de': "Steinkante"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has slept underground for hundreds of millions of years since its birth. It's occasionally found during the excavation of caves.",
	},

	thirdParty: {
		cardmarket: 289871,
		tcgplayer: 117809
	}
}

export default card
