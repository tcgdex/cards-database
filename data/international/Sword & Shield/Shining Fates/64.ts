import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [869],
	set: Set,

	name: {
		'fr-fr': "Charmilly V",
		'en-us': "Alcremie V",
		'es-es': "Alcremie V",
		'it-it': "Alcremie V",
		'pt-br': "Alcremie V",
		'de-de': "Pokusan V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	attacks: [{
		name: {
			'fr-fr': "Granulés Sucrés",
			'en-us': "Sugary Sprinkles",
			'es-es': "Polvo Azucarado",
			'it-it': "Praline Dolci",
			'pt-br': "Confeitos Açucarados",
			'de-de': "Zuckerstreusel"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de chacun de vos Pokémon de Banc.",
			'en-us': "Heal 30 damage from each of your Benched Pokémon.",
			'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon en Banca.",
			'it-it': "Cura ciascuno dei tuoi Pokémon in panchina da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon no Banco.",
			'de-de': "Heile 30 Schadenspunkte bei jedem Pokémon auf deiner Bank."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'fr-fr': "Soupçon de Sucre",
			'en-us': "Sweet Splash",
			'es-es': "Dulce Salpicadura",
			'it-it': "Dolcesplash",
			'pt-br': "Borrifada Doce",
			'de-de': "Süßer Klatsch"
		},

		effect: {
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			'en-us': "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			'es-es': "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
			'pt-br': "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante o próximo turno do seu oponente.",
			'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539343,
				tcgplayer: 232541
			}
		},
	],
}

export default card
