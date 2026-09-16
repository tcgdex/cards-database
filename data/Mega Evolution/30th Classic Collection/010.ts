import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Uxie",
		fr: "Créhelf",
		de: "Selfe",
		es: "Uxie",
		it: "Uxie",
		pt: "Uxie",
		'es-mx': "Uxie"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Psychic Restore",
			fr: "Restitution psy",
			de: "Psycho-Erneuerung",
			es: "Restablecimiento psíquico",
			it: "Psicoripristino",
			pt: "Restauração Psíquica",
			'es-mx': "Restauración psíquica"
		},

		effect: {
			en: "You may put Uxie and all cards attached to it on the bottom of your deck in any order.",
			fr: "Vous pouvez placer Créhelf ainsi que toutes les cartes qui lui sont attachées au dessous de votre deck dans n'importe quel ordre.",
			de: "Du kannst Selfe und alle an es angelegten Karten in beliebiger Reihenfolge unter dein Deck legen.",
			es: "Puedes poner a Uxie y todas las cartas unidas a él al fondo de tu mazo, en cualquier orden.",
			it: "Puoi mettere Uxie e tutte le carte a lui assegnate in fondo al tuo mazzo nell'ordine che preferisci.",
			pt: "Você pode colocar o Uxie e todos os cards ligados a ele no fundo do seu deck em qualquer ordem.",
			'es-mx': "Puedes poner a Uxie y todas las cartas unidas a él al fondo de tu mazo, en cualquier orden."
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card