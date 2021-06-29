import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
		es: "Dugtrio",
		it: "Dugtrio",
		pt: "Dugtrio",
		de: "Digdri"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur"
	},

	attacks: [{
		name: {
			en: "Triple Heads",
			fr: "Tricéphale",
			es: "Trío de Cabezas",
			it: "Tripla Testa",
			pt: "Trio de Caras",
			de: "Dreierkopf"
		},

		effect: {
			en: "Flip 3 coins. This attack does 60 damage for each heads. If all of them are heads, during your opponent’s next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face. S’il y a 3 côtés face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d’attaques infligés à ce Pokémon.",
			es: "Lanza 3 monedas. Este ataque hace 60 puntos de daño por cada cara. Si sale cara en las 3, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa. Se esce testa tutte e tre le volte, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Jogue 3 moedas. Este ataque causa 60 pontos de dano para cada cara. Se todas saírem cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu. Zeigen alle Münzen Kopf, verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: "60×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card