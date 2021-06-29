import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Sandaconda",
		fr: "Dunaconda",
		es: "Sandaconda",
		it: "Sandaconda",
		pt: "Sandaconda",
		de: "Sanaconda"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Silicobra",
		fr: "Dunaja"
	},

	attacks: [{
		name: {
			en: "Big Sand Cannon",
			fr: "Gros Canon Sableux",
			es: "Cañonazo de Arena",
			it: "Grancannone di Sabbia",
			pt: "Grande Canhão de Areia",
			de: "Große Sandkanone"
		},

		effect: {
			en: "Discard the top 6 cards of your deck. This attack does 60 damage for each Fighting Energy card you discarded in this way.",
			fr: "Défaussez les 6 cartes du dessus de votre deck. Cette attaque inflige 60 dégâts pour chaque carte Énergie Fighting défaussée de cette façon.",
			es: "Descarta las 6 primeras cartas de tu baraja. Este ataque hace 60 puntos de daño por cada carta de Energía Fighting que hayas descartado de esta manera.",
			it: "Scarta le prime sei carte del tuo mazzo. Questo attacco infligge 60 danni per ogni carta Energia Fighting che hai scartato in questo modo.",
			pt: "Descarte as 6 cartas de cima do seu baralho. Este ataque causa 60 pontos de dano para cada carta de Energia Fighting descartada desta forma.",
			de: "Lege die obersten 6 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Fighting-Energiekarte 60 Schadenspunkte zu."
		},

		damage: "60×",
		cost: ["Fighting"]
	}, {
		name: {
			en: "Skull Bash",
			fr: "Coud’Krâne",
			es: "Cabezazo",
			it: "Capocciata",
			pt: "Quebra-crânio",
			de: "Schädelwumme"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card