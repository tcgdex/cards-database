import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Meganium",
		fr: "Méganium",
		es: "Meganium",
		it: "Meganium",
		pt: "Meganium",
		de: "Meganie"
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		154,
	],
	hp: 150,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Quick-Ripening Herb",
				fr: "Herbe Mûrissante",
				es: "Hierba Maduración Exprés",
				it: "Maturazione Rapida",
				pt: "Ervamadurecimento Veloz",
				de: "Schnell reifendes Kraut"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this Ability. Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it. You can use this Ability during your first turn or on a Pokémon that was put into play this turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce talent. Choisissez l’un de vos Pokémon de base en jeu. Si vous avez dans votre main une carte de Niveau 2 qui évolue de ce Pokémon, placez-la sur le Pokémon de base pour le faire évoluer. Vous pouvez utiliser ce talent pendant votre premier tour ou sur un Pokémon qui a été joué pendant ce tour.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes usar esta habilidad. Elige 1 de tus Pokémon Básicos en juego. Si tienes en tu mano 1 carta de Fase 2 que evolucione de ese Pokémon, pon esa carta sobre el Pokémon Básico para que evolucione. Puedes usar esta habilidad durante tu primer turno o sobre un Pokémon que se haya puesto en juego en este turno.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi usare questa abilità. Scegli uno dei tuoi Pokémon Base in gioco. Se hai in mano una carta di Fase 2 che si evolve da quel Pokémon, metticela sopra per farlo evolvere. Puoi usare questa abilità durante il tuo primo turno o su un Pokémon che hai messo in gioco nel turno in corso.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode usar esta Habilidade. Escolha 1 dos seus Pokémon Básicos em jogo. Se você tiver 1 carta de Estágio 2 na sua mão que evolua daquele Pokémon, coloque aquela carta sobre o Pokémon Básico para evoluí-lo. Você pode usar esta Habilidade durante a sua primeira vez de jogar ou em um Pokémon que foi colocado em jogo nesta rodada.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du diese Fähigkeit einsetzen. Wähle 1 deiner Basis-Pokémon im Spiel. Wenn du eine Phase-2-Karte auf der Hand hast, die sich aus jenem Pokémon entwickelt, lege sie auf das Basis-Pokémon, um es zu entwickeln. Du kannst diese Fähigkeit während deines ersten Zuges oder für ein Pokémon, das in diesem Zug ins Spiel gebracht wurde, einsetzen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
				es: "Rayo Solar",
				it: "Solarraggio",
				pt: "Raio Solar",
				de: "Solarstrahl"
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
