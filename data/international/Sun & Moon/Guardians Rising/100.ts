import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Kommo-o GX",
		'fr-fr': "Ékaïser GX",
		'es-es': "Kommo-o GX",
		'it-it': "Kommo-o GX",
		'pt-br': "Kommo-o GX",
		'de-de': "Grandiras GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		784,
	],

	hp: 240,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Hakamo-o",
		'fr-fr': "Écaïd",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
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
				'en-us': "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shred",
				'fr-fr': "Déchiquetage",
				'es-es': "Hacer Trizas",
				'it-it': "Tritatutto",
				'pt-br': "Triturar",
				'de-de': "Zerfetzer"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 130,

		},
		{
			cost: [
				"Fighting",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ultra Uppercut GX",
				'fr-fr': "Ultra Uppercut GX",
				'es-es': "Ultragancho GX",
				'it-it': "Ultramontante-GX",
				'pt-br': "Ultradireto GX",
				'de-de': "Ultrahieb GX"
			},
			effect: {
				'en-us': "(You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "(No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Non puoi usare più di un attacco GX a partita.",
				'pt-br': "(Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "(Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 240,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 296847,
		tcgplayer: 131016
	}
}

export default card
