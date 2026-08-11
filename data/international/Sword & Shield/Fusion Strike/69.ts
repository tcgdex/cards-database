import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [516],
	set: Set,

	name: {
		'en-us': "Simipour",
		'fr-fr': "Flotoutan",
		'es-es': "Simipour",
		'it-it': "Simipour",
		'pt-br': "Simipour",
		'de-de': "Sodachita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
		'es-es': "Panpour",
		'it-it': "Panpour",
		'pt-br': "Panpour",
		'de-de': "Sodamak"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Pulse",
			'fr-fr': "Vibraqua",
			'de-de': "Aquawelle",
			'es-es': "Hidropulso",
			'pt-br': "Pulso d'Água",
			'it-it': "Idropulsar"
		},

		damage: 20,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Circus Soaking",
			'fr-fr': "Cirque Trempé",
			'de-de': "Klatschnasser Zirkus",
			'es-es': "Circo Anegador",
			'pt-br': "Encharcar o Circo",
			'it-it': "Inondacirco"
		},

		damage: "60×",

		effect: {
			'en-us': "Your opponent reveals their hand. This attack does 60 damage for each Supporter card you find there.",
			'fr-fr': "Votre adversaire dévoile sa main. Cette attaque inflige 60 dégâts pour chaque carte Supporter que vous y trouvez.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Unterstützerkarte, die du dort findest, 60 Schadenspunkte zu.",
			'es-es': "Tu rival enseña las cartas de su mano. Este ataque hace 60 puntos de daño por cada carta de Partidario que encuentres entre ellas.",
			'pt-br': "Seu oponente revela a própria mão. Este ataque causa 60 pontos de dano para cada carta de Apoiador que encontrar lá.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 60 danni per ogni carta Aiuto presente tra quelle carte."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582203,
				tcgplayer: 253212
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582203,
				tcgplayer: 253212
			}
		},
	],
}

export default card
