import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [870],
	set: Set,

	name: {
		'fr-fr': "Hexadron V",
		'en-us': "Falinks V",
		'es-es': "Falinks V",
		'it-it': "Falinks V",
		'pt-br': "Falinks V",
		'de-de': "Legios V"
	},

	illustrator: "aky CG Works",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Escadron Mur de Fer",
			'en-us': "Iron Defense Formation",
			'es-es': "Formación de Defensa Férrea",
			'it-it': "Schieramento Ferroscudo",
			'pt-br': "Linha de Defesa de Ferro",
			'de-de': "Eiserne Abwehrformation"
		},

		effect: {
			'fr-fr': "Tous vos Pokémon ayant « Hexadron » dans leur nom subissent 20 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'en-us': "All of your Pokémon that have \"Falinks\" in their name take 20 less damage from your opponent's attacks (after applying Weakness and Resistance).",
			'es-es': "Los ataques de tu rival hacen 20 puntos de daño menos a todos tus Pokémon que tengan \"Falinks\" en su nombre (después de aplicar Debilidad y Resistencia).",
			'it-it': "I tuoi Pokémon che hanno “Falinks” nel nome subiscono 20 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Todos os seus Pokémon que tenham \"Falinks” em seu nome recebem 20 pontos de dano a menos dos ataques do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Allen deinen Pokémon, bei denen „Legios“ zum Namen gehört, werden durch Attacken deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Giga Impact",
			'en-us': "Giga Impact",
			'es-es': "Gigaimpacto",
			'it-it': "Gigaimpatto",
			'pt-br': "Gigaimpacto",
			'de-de': "Gigastoß"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "During your next turn, this Pokémon can't attack.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
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
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539963,
				tcgplayer: 232508
			}
		},
	],
}

export default card
