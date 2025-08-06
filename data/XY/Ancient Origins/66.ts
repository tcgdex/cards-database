import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
		es: "Porygon-Z",
		it: "Porygon-Z",
		pt: "Porygon-Z",
		de: "Porygon-Z"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
		es: "Porygon2",
		it: "Porygon2",
		pt: "Porygon2",
		de: "Porygon2"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cyber Crush",
				fr: "Cyber Broyage",
				es: "Cibercolisión",
				it: "Schianto Cibernetico",
				pt: "Ciberesmagamento",
				de: "Cyberschlag"
			},
			effect: {
				en: "Discard all Special Energy attached to each of your opponent's Pokémon.",
				fr: "Défaussez toutes les Énergies spéciales attachées à chacun des Pokémon de votre adversaire.",
				es: "Descarta todas las Energías Especiales unidas a cada uno de los Pokémon de tu rival.",
				it: "Scarta tutte le Energie speciali assegnate a ciascuno dei Pokémon del tuo avversario.",
				pt: "Descarte todas as Energias Especiais ligada a cada um dos Pokémon do seu oponente.",
				de: "Lege alle Spezial-Energie, die an jedes gegnerische Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slowing Beam",
				fr: "Rayon Ralentissant",
				es: "Rayo Desacelerador",
				it: "Frenoraggio",
				pt: "Raio Desacelerador",
				de: "Bremsender Strahl"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more.",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus.",
				es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan Colorless más.",
				it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore costano Colorless in più.",
				pt: "Durante a próxima vez de jogar do seu oponente, os ataques do Pokémon Defensor custam mais Colorless.",
				de: "Während des nächsten Zuges deines Gegners erhöhen sich die Angriffskosten des Verteidigenden Pokémon um Colorless."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 284247,
		tcgplayer: 101488
	}
}

export default card
