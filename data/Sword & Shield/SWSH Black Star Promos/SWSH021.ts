import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Polteageist V",
		fr: "Polthégeist V",
		es: "Polteageist V",
		it: "Polteageist V",
		pt: "Polteageist V",
		de: "Mortipot V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Teapot of Surprises",
			fr: "Théière Surprise",
			es: "Tetera de Sorpresas",
			it: "Teiera di Sorprese",
			pt: "Teapot of Surprises",
			de: "Wunder-Teekanne"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an opponent's attack (even if it is Knocked Out), choose a random card from your opponent's hand. Your opponent reveals that card and puts it on the bottom of their deck.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même s'il est mis K.O.), choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la place en dessous de son deck.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de tu rival (incluso si queda Fuera de Combate), elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta y la pone en la parte inferior de su baraja.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dell'avversario, anche se viene messo KO, scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la mette in fondo al suo mazzo.",
			pt: "If this Pokémon is in the Active Spot and is damaged by an opponent's attack (even if it is Knocked Out), choose a random card from your opponent's hand. Your opponent reveals that card and puts it on the bottom of their deck.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und legt sie unter sein Deck."
		}
	}],

	attacks: [{
		name: {
			en: "Mind Bend",
			fr: "Contrôleur d'Esprit",
			es: "Fusión Mental",
			it: "Fusione Mentale",
			pt: "Mind Bend",
			de: "Gedankenverbiegung"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Your opponent's Active Pokémon is now Confused.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	stage: "Basic",
	dexId: [855],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V"
}

export default card
