import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Arceus ◇",
		fr: "Arceus ◇",
		es: "Arceus ◇",
		it: "Arceus ◇",
		pt: "Arceus ◇",
		de: "Arceus ◇"
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
				en: "First Law",
				fr: "Loi Originelle",
				es: "Primera Ley",
				it: "Editto Primevo",
				pt: "Primeira Lei",
				de: "Erstes Gesetz"
			},
			effect: {
				en: "Prevent all effects of your opponent’s attacks, except damage, done to this Pokémon.",
				fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
				es: "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligido a este Pokémon.",
				it: "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon.",
				pt: "Previne todos os efeitos de ataques do seu oponente, exceto dano, causados a este Pokémon.",
				de: "Verhindere alle Effekte von Attacken deines Gegners, außer Schaden, die diesem Pokémon zugefügt werden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Trinity Star",
				fr: "Étoile Triptyque",
				es: "Estrella Trinidad",
				it: "1-2-3 Stella",
				pt: "Estrela Tríptica",
				de: "Stern der Dreiheit"
			},
			effect: {
				en: "You can use this attack only if you have Grass, Water, and Lightning Pokémon on your Bench. Search your deck for up to 3 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Vous ne pouvez utiliser cette attaque que si vous avez des Pokémon Grass, Water et Lightning sur votre Banc. Cherchez jusqu’à 3 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				es: "Puedes usar este ataque solo si tienes Pokémon Grass, Water y Lightning en tu Banca. Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Puoi usare questo attacco solo se hai Pokémon Grass, Water e Lightning in panchina. Cerca nel tuo mazzo fino a tre carte Energia base e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Você só pode usar este ataque se tiver Pokémon Grass, Water e Lightning no seu Banco. Procure por até 3 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Du kannst diese Attacke nur einsetzen, wenn du Grass-, Water- und Lightning-Pokémon auf deiner Bank hast. Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Étoile Triptyque",
			},
			effect: {
				fr: "Vous ne pouvez utiliser cette attaque que si vous avez des Pokémon Grass, Water et Lightning sur votre Banc. Cherchez jusqu’à 3 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
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



}

export default card
