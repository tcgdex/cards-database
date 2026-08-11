import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Arceus ◇",
		'fr-fr': "Arceus ◇",
		'es-es': "Arceus ◇",
		'it-it': "Arceus ◇",
		'pt-br': "Arceus ◇",
		'de-de': "Arceus ◇"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		493,
	],

	hp: 160,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "First Law",
				'fr-fr': "Loi Originelle",
				'es-es': "Primera Ley",
				'it-it': "Editto Primevo",
				'pt-br': "Primeira Lei",
				'de-de': "Erstes Gesetz"
			},
			effect: {
				'en-us': "Prevent all effects of your opponent’s attacks, except damage, done to this Pokémon.",
				'fr-fr': "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
				'es-es': "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligido a este Pokémon.",
				'it-it': "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon.",
				'pt-br': "Previne todos os efeitos de ataques do seu oponente, exceto dano, causados a este Pokémon.",
				'de-de': "Verhindere alle Effekte von Attacken deines Gegners, außer Schaden, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Trinity Star",
				'fr-fr': "Étoile Triptyque",
				'es-es': "Estrella Trinidad",
				'it-it': "1-2-3 Stella",
				'pt-br': "Estrela Tríptica",
				'de-de': "Stern der Dreiheit"
			},
			effect: {
				'en-us': "You can use this attack only if you have Grass, Water, and Lightning Pokémon on your Bench. Search your deck for up to 3 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				'fr-fr': "Vous ne pouvez utiliser cette attaque que si vous avez des Pokémon Grass, Water et Lightning sur votre Banc. Cherchez jusqu’à 3 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				'es-es': "Puedes usar este ataque solo si tienes Pokémon Grass, Water y Lightning en tu Banca. Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				'it-it': "Puoi usare questo attacco solo se hai Pokémon Grass, Water e Lightning in panchina. Cerca nel tuo mazzo fino a tre carte Energia base e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Você só pode usar este ataque se tiver Pokémon Grass, Water e Lightning no seu Banco. Procure por até 3 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				'de-de': "Du kannst diese Attacke nur einsetzen, wenn du Grass-, Water- und Lightning-Pokémon auf deiner Bank hast. Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'fr-fr': "Étoile Triptyque",
			},
			effect: {
				'fr-fr': "Vous ne pouvez utiliser cette attaque que si vous avez des Pokémon Grass, Water et Lightning sur votre Banc. Cherchez jusqu’à 3 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is told in mythology that this Pokémon was born before the universe even existed.",
	},

	thirdParty: {
		cardmarket: 355609
	}
}

export default card
