import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [51],
	set: Set,

	name: {
		'en-us': "Dugtrio",
		'fr-fr': "Triopikeur",
		'es-es': "Dugtrio",
		'it-it': "Dugtrio",
		'pt-br': "Dugtrio",
		'de-de': "Digdri"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
		'es-es': "Diglett",
		'it-it': "Diglett",
		'pt-br': "Diglett",
		'de-de': "Digda"
	},

	attacks: [{
		name: {
			'en-us': "Triple Heads",
			'fr-fr': "Tricéphale",
			'es-es': "Trío de Cabezas",
			'it-it': "Tripla Testa",
			'pt-br': "Trio de Caras",
			'de-de': "Dreierkopf"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 60 damage for each heads. If all of them are heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face. S'il y a 3 côtés face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 3 monedas. Este ataque hace 60 puntos de daño por cada cara. Si sale cara en las 3, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa. Se esce testa tutte e tre le volte, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 60 pontos de dano para cada cara. Se todas saírem cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu. Zeigen alle Münzen Kopf, verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: "60×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "These Diglett triplets dig over 60 miles below sea level. No one knows what it's like underground."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567185,
				tcgplayer: 241742
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567185,
				tcgplayer: 241742
			}
		},
	],
}

export default card
