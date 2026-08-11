import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Chesnaught",
		'fr-fr': "Blindépique",
		'es-es': "Chesnaught",
		'it-it': "Chesnaught",
		'pt-br': "Chesnaught",
		'de-de': "Brigaron"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		652,
	],

	hp: 160,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Quilladin",
		'fr-fr': "Boguérisse",
		'es-es': "Quilladin",
		'it-it': "Quilladin",
		'pt-br': "Quilladin",
		'de-de': "Igastarnish"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spike Lariat",
				'fr-fr': "Lasso à Piques",
				'es-es': "Lazo de Espinas",
				'it-it': "Chiodolazzo",
				'pt-br': "Laço de Espinhos",
				'de-de': "Stachellasso"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha dei segnalini danno, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já possuir contadores de danos, este ataque causará 60 de danos adicionais.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Adamantine Press",
				'fr-fr': "Charge Adamantine",
				'es-es': "Presión Adamantina",
				'it-it': "Pressa Adamantina",
				'pt-br': "Pressão de Adamantina",
				'de-de': "Steinharter Druck"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "When it takes a defensive posture with its fists guarding its face, it could withstand a bomb blast.",
	},

	thirdParty: {
		cardmarket: 286257,
		tcgplayer: 107130
	}
}

export default card
