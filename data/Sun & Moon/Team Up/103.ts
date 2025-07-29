import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
		es: "Ferrothorn",
		it: "Ferrothorn",
		pt: "Ferrothorn",
		de: "Tentantel"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		598,
	],

	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
				es: "Presión de Guardia",
				it: "Pressadifesa",
				pt: "Aperto Protetor",
				de: "Schutzdruck"
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thorn Pod Throw",
				fr: "Lancer de Boule Épine",
				es: "Lanzamiento Bola Espina",
				it: "Lancio Spinasfere",
				pt: "Arremesso de Vagem Espinhosa",
				de: "Dornkugelwurf"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Metal Energy attached to this Pokémon to 1 of your opponent’s Benched Pokémon. You can’t do more than 100 damage to a Benched Pokémon in this way. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts, multipliés par le nombre d’Énergies Metal attachées à ce Pokémon, à l’un des Pokémon de Banc de votre adversaire. Vous ne pouvez pas infliger plus de 100 dégâts à un Pokémon de Banc de cette façon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño por cada Energía Metal unida a este Pokémon a 1 de los Pokémon en Banca de tu rival. No puedes hacer más de 100 puntos de daño a 1 Pokémon en Banca de esta manera. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario per ogni Energia Metal assegnata a questo Pokémon. Non puoi infliggere più di 100 danni a un Pokémon in panchina in questo modo. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano vezes a quantidade de Energia Metal ligada a este Pokémon a 1 dos Pokémon no Banco do seu oponente. Você não pode causar mais de 100 pontos de dano a um Pokémon no Banco desta forma (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Metal-Energien zu. Du kannst einem Pokémon auf der Bank auf diese Weise höchstens 100 Schadenspunkte zufügen. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 369032
	}
}

export default card
