import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hexadron V",
		en: "Falinks V",
		es: "Falinks V",
		it: "Falinks V",
		pt: "Falinks V",
		de: "Legios V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Escadron Mur de Fer",
			en: "Iron Defense Formation",
			es: "Formación de Defensa Férrea",
			it: "Schieramento Ferroscudo",
			pt: "Linha de Defesa de Ferro",
			de: "Eiserne Abwehrformation"
		},

		effect: {
			fr: "Tous vos Pokémon ayant « Hexadron » dans leur nom subissent 20 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
			en: "All of your Pokémon that have \"Falinks\" in their name take 20 less damage from your opponent's attacks (after applying Weakness and Resistance).",
			es: "Los ataques de tu rival hacen 20 puntos de daño menos a todos tus Pokémon que tengan \"Falinks\" en su nombre (después de aplicar Debilidad y Resistencia).",
			it: "I tuoi Pokémon che hanno “Falinks” nel nome subiscono 20 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Todos os seus Pokémon que tenham \"Falinks” em seu nome recebem 20 pontos de dano a menos dos ataques do seu oponente (depois de aplicar Fraqueza e Resistência).",
			de: "Allen deinen Pokémon, bei denen „Legios“ zum Namen gehört, werden durch Attacken deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			fr: "Giga Impact",
			en: "Giga Impact",
			es: "Gigaimpacto",
			it: "Gigaimpatto",
			pt: "Gigaimpacto",
			de: "Gigastoß"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "During your next turn, this Pokémon can't attack.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 210,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",
	suffix: "V"
}

export default card
