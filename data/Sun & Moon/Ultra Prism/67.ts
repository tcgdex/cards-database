import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		pt: "Lucario",
		de: "Lucario"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Precognitive Aura",
				fr: "Aura Prémonitoire",
				es: "Aura Premonitoria",
				it: "Aura Precognitiva",
				pt: "Aura Precógnita",
				de: "Vorhersehende Aura"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Garchomp in play, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez Carchacrok en jeu, vous pouvez chercher une carte dans votre deck puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), si tienes a Garchomp en juego, puedes buscar en tu baraja 1 carta y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se hai Garchomp in gioco, puoi cercare nel tuo mazzo una carta qualsiasi e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se você tiver Garchomp em jogo, poderá procurar por 1 carta no seu baralho e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du, wenn du Knakrack im Spiel hast, dein Deck nach 1 Karte durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Missile Jab",
				fr: "Coup Propulsé",
				es: "Puya Misil",
				it: "Missilpugno",
				pt: "Soco Míssil",
				de: "Wieselflinke Gerade"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
