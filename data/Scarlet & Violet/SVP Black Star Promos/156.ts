import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Quagsire",
		fr: "Maraiste",
		es: "Quagsire",
		it: "Quagsire",
		pt: "Quagsire",
		de: "Morlord"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			it: "Rotolamento",
			pt: "Rolagem",
			de: "Walzer"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Drenched Headbutt",
			fr: "Coup d'Boule Trempé",
			es: "Cabezazo Empapado",
			it: "Bottintesta Inzuppata",
			pt: "Cabeçada Encharcada",
			de: "Durchtränkte Kopfnuss"
		},

		effect: {
			en: "Discard the top 3 cards of your deck, and this attack does 80 damage for each Energy card you discarded in this way.",
			fr: "Défaussez les 3 cartes du dessus de votre deck. Cette attaque inflige 80 dégâts pour chaque carte Énergie défaussée de cette façon.",
			es: "Descarta las 3 primeras cartas de tu baraja. Este ataque hace 80 puntos de daño por cada carta de Energía que hayas descartado de esta manera.",
			it: "Scarta le prime tre carte del tuo mazzo. Questo attacco infligge 80 danni per ogni carta Energia che hai scartato in questo modo.",
			pt: "Descarte as 3 cartas de cima do seu baralho. Este ataque causa 80 pontos de dano para cada carta de Energia descartada desta forma.",
			de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Energiekarte 80 Schadenspunkte zu."
		},

		damage: "80×"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card