import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [182],
	set: Set,

	name: {
		'fr-fr': "Joliflor",
		'en-us': "Bellossom",
		'es-es': "Bellossom",
		'it-it': "Bellossom",
		'pt-br': "Bellossom",
		'de-de': "Blubella"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Ortide",
		'en-us': "Gloom",
		'es-es': "Gloom",
		'it-it': "Gloom",
		'pt-br': "Gloom",
		'de-de': "Duflor"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Poudre Dodo",
			'en-us': "Sleep Powder",
			'es-es': "Somnífero",
			'it-it': "Sonnifero",
			'pt-br': "Pó do Sono",
			'de-de': "Schlafpuder"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 30
	}, {
		cost: ["Grass"],

		name: {
			'fr-fr': "Danse Puissante",
			'en-us': "Powerful Dance",
			'es-es': "Danza Poderosa",
			'it-it': "Forzadanza",
			'pt-br': "Dança Poderosa",
			'de-de': "Mächtiger Tanz"
		},

		effect: {
			'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 90 dégâts pour chaque côté face.",
			'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 90 damage for each heads.",
			'es-es': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 90 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 90 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda para cada Energia ligada a este Pokémon. Este ataque causa 90 pontos de dano para cada cara.",
			'de-de': "Wirf 1 Münze für jede an dieses Pokémon angelegte Energie. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
		},

		damage: "90×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Bellossom gather at times and appear to dance. They say that the dance is a ritual to summon the sun.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725083,
				tcgplayer: 509654,
				cardtrader: 255563
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725083,
				tcgplayer: 509654,
				cardtrader: 255563
			}
		},
	],

	illustrator: "sui",

	
}

export default card
