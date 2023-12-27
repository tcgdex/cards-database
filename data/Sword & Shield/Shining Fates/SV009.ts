import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Astronelle",
		en: "Orbeetle",
		es: "Orbeetle",
		it: "Orbeetle",
		pt: "Orbeetle",
		de: "Maritellit"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		fr: "Coléodôme",
		en: "Dottler"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Radar d'Insecte",
			en: "Bug's Radar",
			es: "Radar de Bichos",
			it: "Coleoradar",
			pt: "Radar de Inseto",
			de: "Käferradar"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus du deck de votre adversaire, puis les replacer dans l'ordre désiré.",
			en: "Once during your turn, you may look at the top 3 cards of your opponent's deck and put them back in any order.",
			es: "Una vez durante tu turno, puedes mirar las 3 primeras cartas de la baraja de tu rival y volver a ponerlas en la parte superior de su baraja en el orden que quieras.",
			it: "Una sola volta durante il tuo turno, puoi guardare le prime tre carte del mazzo del tuo avversario e rimetterle a posto nell'ordine che preferisci.",
			pt: "Uma vez durante o seu turno, você poderá olhar as 3 cartas de cima do baralho do seu oponente e colocá-las de volta em qualquer ordem.",
			de: "Einmal während deines Zuges kannst du dir die obersten 3 Karten des Decks deines Gegners anschauen und sie in beliebiger Reihenfolge zurücklegen."
		}
	}],

	attacks: [{
		name: {
			fr: "Onde Cérébrale",
			en: "Brainwave",
			es: "Onda Cerebral",
			it: "Onda Cerebrale",
			pt: "Onda Cerebral",
			de: "Gehirnwelle"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
			en: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Psychic unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Psychic assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Psychic ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Psychic-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage2",

	description: {
		en: "It emits psychic energy to observe and study what's around it—and what's around it can include things over six miles away."
	}
}

export default card
