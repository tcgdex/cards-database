import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
		es: "Victreebel",
		it: "Victreebel",
		pt: "Victreebel",
		de: "Sarzenia"
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
		en: "Weepinbell",
		fr: "Boustiflor",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Reactive Poison",
				fr: "Poison Réactif",
				es: "Veneno Reactivo",
				it: "Reattiveleno",
				pt: "Veneno Reativo",
				de: "Reaktives Gift"
			},
			effect: {
				en: "This attack does 60 more damage for each Special Condition affecting your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 60 puntos de daño más por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 60 danni in più per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 60 pontos de dano a mais para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 60 Schadenspunkte mehr mal der Anzahl der Speziellen Zustände zu, von denen das Aktive Pokémon deines Gegners betroffen ist."
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
				en: "Gastro Acid",
				fr: "Suc Digestif",
				es: "Bilis",
				it: "Gastroacido",
				pt: "Ácido Gástrico",
				de: "Magensäfte"
			},
			effect: {
				en: "The Defending Pokémon has no Abilities until the end of your next turn.",
				fr: "Le Pokémon Défenseur n’a pas de talent jusqu’à la fin de votre prochain tour.",
				es: "El Pokémon Defensor no tiene ninguna habilidad hasta el final de tu próximo turno.",
				it: "Le abilità del Pokémon difensore non hanno più effetto fino alla fine del tuo prossimo turno.",
				pt: "O Pokémon Defensor não terá Habilidades até o final da sua próxima vez de jogar.",
				de: "Das Verteidigende Pokémon hat bis zum Ende deines nächsten Zuges keine Fähigkeiten."
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

	thirdParty: {
		cardmarket: 372308,
		tcgplayer: 189055
	}
}

export default card
