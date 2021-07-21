import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Togedemaru",
		fr: "Togedemaru",
		es: "Togedemaru",
		it: "Togedemaru",
		pt: "Togedemaru",
		de: "Togedemaru"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		777,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Defense Curl",
				fr: "Boul’Armure",
				es: "Rizo Defensa",
				it: "Ricciolscudo",
				pt: "Espiral de Defesa",
				de: "Einigler"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce testa, previeni tutti i danni da attacchi inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, prevenirá todo o dano causado a este Pokémon por ataques durante a próxima vez de jogar do seu oponente.",
				de: "Wirf 1 Münze. Verhindere bei Kopf allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken zugefügt wird."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Discharge",
				fr: "Coup d’Jus",
				es: "Chispazo",
				it: "Scarica",
				pt: "Descarga",
				de: "Ladungsstoß"
			},
			effect: {
				en: "Discard all Lightning Energy from this Pokémon. This attack does 30 damage for each card you discarded in this way.",
				fr: "Défaussez toutes les Énergies Lightning de ce Pokémon. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta todas las Energías Lightning de este Pokémon. Este ataque hace 30 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta tutte le Energie Lightning assegnate a questo Pokémon. Questo attacco infligge 30 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte todas as Energias Lightning deste Pokémon. Este ataque causa 30 pontos de dano para cada carta descartada desta forma.",
				de: "Lege alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
