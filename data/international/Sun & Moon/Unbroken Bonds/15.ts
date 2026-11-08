import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Victreebel",
		'fr-fr': "Empiflor",
		'es-es': "Victreebel",
		'it-it': "Victreebel",
		'pt-br': "Victreebel",
		'de-de': "Sarzenia"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Reactive Poison",
				'fr-fr': "Poison Réactif",
				'es-es': "Veneno Reactivo",
				'it-it': "Reattiveleno",
				'pt-br': "Veneno Reativo",
				'de-de': "Reaktives Gift"
			},
			effect: {
				'en-us': "This attack does 60 more damage for each Special Condition affecting your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 60 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 60 puntos de daño más por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 60 danni in più per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 60 pontos de dano a mais para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 60 Schadenspunkte mehr mal der Anzahl der Speziellen Zustände zu, von denen das Aktive Pokémon deines Gegners betroffen ist."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gastro Acid",
				'fr-fr': "Suc Digestif",
				'es-es': "Bilis",
				'it-it': "Gastroacido",
				'pt-br': "Ácido Gástrico",
				'de-de': "Magensäfte"
			},
			effect: {
				'en-us': "The Defending Pokémon has no Abilities until the end of your next turn.",
				'fr-fr': "Le Pokémon Défenseur n’a pas de talent jusqu’à la fin de votre prochain tour.",
				'es-es': "El Pokémon Defensor no tiene ninguna habilidad hasta el final de tu próximo turno.",
				'it-it': "Le abilità del Pokémon difensore non hanno più effetto fino alla fine del tuo prossimo turno.",
				'pt-br': "O Pokémon Defensor não terá Habilidades até o final da sua próxima vez de jogar.",
				'de-de': "Das Verteidigende Pokémon hat bis zum Ende deines nächsten Zuges keine Fähigkeiten."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
	},

	thirdParty: {
		cardmarket: 372308,
		tcgplayer: 189055
	}
}

export default card
