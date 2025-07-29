import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Chesnaught",
		fr: "Blindépique",
		es: "Chesnaught",
		it: "Chesnaught",
		pt: "Chesnaught",
		de: "Brigaron"
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
		en: "Quilladin",
		fr: "Boguérisse",
		es: "Quilladin",
		it: "Quilladin",
		pt: "Quilladin",
		de: "Igastarnish"
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
				en: "Spike Lariat",
				fr: "Lasso à Piques",
				es: "Lazo de Espinas",
				it: "Chiodolazzo",
				pt: "Laço de Espinhos",
				de: "Stachellasso"
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha dei segnalini danno, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente já possuir contadores de danos, este ataque causará 60 de danos adicionais.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 60 weitere Schadenspunkte zu."
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
				en: "Adamantine Press",
				fr: "Charge Adamantine",
				es: "Presión Adamantina",
				it: "Pressa Adamantina",
				pt: "Pressão de Adamantina",
				de: "Steinharter Druck"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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

	thirdParty: {
		cardmarket: 286257
	}
}

export default card
