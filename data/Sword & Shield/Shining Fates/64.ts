import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Charmilly V",
		en: "Alcremie V",
		es: "Alcremie V",
		it: "Alcremie V",
		pt: "Alcremie V",
		de: "Pokusan V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Granulés Sucrés",
			en: "Sugary Sprinkles",
			es: "Polvo Azucarado",
			it: "Praline Dolci",
			pt: "Confeitos Açucarados",
			de: "Zuckerstreusel"
		},

		effect: {
			fr: "Soignez 30 dégâts de chacun de vos Pokémon de Banc.",
			en: "Heal 30 damage from each of your Benched Pokémon.",
			es: "Cura 30 puntos de daño a cada uno de tus Pokémon en Banca.",
			it: "Cura ciascuno dei tuoi Pokémon in panchina da 30 danni.",
			pt: "Cure 30 pontos de dano de cada um dos seus Pokémon no Banco.",
			de: "Heile 30 Schadenspunkte bei jedem Pokémon auf deiner Bank."
		},

		cost: ["Psychic"]
	}, {
		name: {
			fr: "Soupçon de Sucre",
			en: "Sweet Splash",
			es: "Dulce Salpicadura",
			it: "Dolcesplash",
			pt: "Borrifada Doce",
			de: "Süßer Klatsch"
		},

		effect: {
			fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			en: "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn.",
			es: "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
			pt: "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante o próximo turno do seu oponente.",
			de: "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card