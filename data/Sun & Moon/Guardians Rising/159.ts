import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Kommo-o-GX",
		fr: "Ékaïser-GX",
		es: "Kommo-o-GX",
		it: "Kommo-o-GX",
		pt: "Kommo-o-GX",
		de: "Grandiras-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
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
				en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Shred",
				fr: "Déchiquetage",
				es: "Hacer Trizas",
				it: "Tritatutto",
				pt: "Triturar",
				de: "Zerfetzer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
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
				en: "Ultra Uppercut GX",
				fr: "Ultra Uppercut GX",
				es: "Ultragancho GX",
				it: "Ultramontante-GX",
				pt: "Ultradireto GX",
				de: "Ultrahieb GX"
			},
			effect: {
				en: "(You can’t use more than 1 GX attack in a game.)",
				fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "(No puedes usar más de 1 ataque GX en una partida).",
				it: "Non puoi usare più di un attacco GX a partita.",
				pt: "(Você não pode usar mais de 1 ataque GX por partida.)",
				de: "(Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
