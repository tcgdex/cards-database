import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'es-es': "Octillery",
		'it-it': "Octillery",
		'pt-br': "Octillery",
		'de-de': "Octillery"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		224,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ink Spit",
				'fr-fr': "Sepia’Crachat",
				'es-es': "Escupido de Tinta",
				'it-it': "Sputinchiostro",
				'pt-br': "Cuspe de Tinta",
				'de-de': "Tintenspucke"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent’s next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
				'es-es': "Si el Pokémon Defensor intenta atacar durante el próximo turno de tu rival, este lanza 1 moneda. Si sale cruz, ese ataque no hace nada.",
				'it-it': "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell’attacco non ha effetto.",
				'pt-br': "Se o Pokémon Defensor tentar atacar durante a próxima vez de jogar do seu oponente, seu oponente jogará 1 moeda. Se sair coroa, aquele ataque não fará nada.",
				'de-de': "Wenn das Verteidigende Pokémon versucht, während des nächsten Zuges deines Gegners anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl hat jene Attacke keine Auswirkungen."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Special Artillery",
				'fr-fr': "Artillerie Spéciale",
				'es-es': "Artillería Especial",
				'it-it': "Artiglieria Speciale",
				'pt-br': "Artilharia Especial",
				'de-de': "Spezialgeschütz"
			},
			effect: {
				'en-us': "You may discard a Special Energy from this Pokémon. If you do, this attack does 80 more damage.",
				'fr-fr': "Vous pouvez défausser une Énergie spéciale attachée à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Puedes descartar 1 Energía Especial de este Pokémon. Si lo haces, este ataque hace 80 puntos de daño más.",
				'it-it': "Puoi scartare un’Energia speciale assegnata a questo Pokémon. Se lo fai, questo attacco infligge 80 danni in più.",
				'pt-br': "Você pode descartar 1 Energia Especial deste Pokémon. Se fizer isto, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Du kannst 1 Spezial-Energie von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has a tendency to want to be in holes. It prefers rock crags or pots and sprays ink from them before attacking.",
	},

	thirdParty: {
		cardmarket: 311873,
		tcgplayer: 149044
	}
}

export default card
