import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [199],
	set: Set,

	name: {
		'en-us': "Galarian Slowking",
		'fr-fr': "Roigada de Galar",
		'es-es': "Slowking de Galar",
		'it-it': "Slowking di Galar",
		'pt-br': "Slowking de Galar",
		'de-de': "Galar-Laschoking"
	},

	illustrator: "Naoki Saito",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Galarian Slowpoke",
		'fr-fr': "Ramoloss de Galar",
		'es-es': "Slowpoke de Galar",
		'it-it': "Slowpoke di Galar",
		'pt-br': "Slowpoke de Galar",
		'de-de': "Galar-Flegmon"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mysterious Potion",
			'fr-fr': "Potion Mystérieuse",
			'es-es': "Poción Misteriosa",
			'it-it': "Pozione Misteriosa",
			'pt-br': "Poção Misteriosa",
			'de-de': "Geheimnisvoller Trank"
		},

		effect: {
			'en-us': "Once during your turn, you may choose 1 of your Pokémon and flip a coin. If heads, heal 90 damage from that Pokémon. If tails, put 3 damage counters on that Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez choisir l'un de vos Pokémon et lancer une pièce. Si c'est face, soignez 90 dégâts de ce Pokémon-là. Si c'est pile, placez 3 marqueurs de dégâts sur ce même Pokémon.",
			'es-es': "Una vez durante tu turno, puedes elegir 1 de tus Pokémon y lanzar 1 moneda. Si sale cara, cura 90 puntos de daño a ese Pokémon. Si sale cruz, pon 3 contadores de daño en ese Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi scegliere uno dei tuoi Pokémon e lanciare una moneta. Se esce testa, cura quel Pokémon da 90 danni. Se esce croce, metti tre segnalini danno sul quel Pokémon.",
			'pt-br': "Uma vez durante o seu turno, você poderá escolher 1 dos seus Pokémon e jogar 1 moeda. Se sair cara, cure 90 pontos de dano daquele Pokémon. Se sair coroa, coloque 3 contadores de dano naquele Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 1 deiner Pokémon wählen und 1 Münze werfen. Heile bei Kopf 90 Schadenspunkte bei jenem Pokémon. Lege bei Zahl 3 Schadensmarken auf jenes Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Spray Fluid",
			'fr-fr': "Fluide Éclaboussant",
			'es-es': "Fluido Rociado",
			'it-it': "Fluidospray",
			'pt-br': "Fluido Spray",
			'de-de': "Sprühwasser"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "While chanting strange spells, this Pokémon combines its internal toxins with what it's eaten, creating strange potions."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567206,
				tcgplayer: 241769
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 752310
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567206,
				tcgplayer: 241769
			}
		},
	],
}

export default card
