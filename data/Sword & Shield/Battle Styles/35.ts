import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Mr. Rime",
		fr: "M. Glaquette de Galar",
		es: "Mr. Rime de Galar",
		it: "Mr. Rime di Galar",
		pt: "Mr. Rime de Galar",
		de: "Galar-Pantifrost"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Galarian Mr. Mime",
		fr: "M. Mime de Galar"
	},

	attacks: [{
		name: {
			en: "Ball Juggling",
			fr: "Jeu de Balls",
			es: "Malabarismo con Bolas",
			it: "Giocoleria Ball",
			pt: "Malabarismo com Bolas",
			de: "Ball-Jongleur"
		},

		effect: {
			en: "Discard any number of Item cards that have the word “Ball” in their name from your hand. This attack does 40 more damage for each card you discarded in this way.",
			fr: "Défaussez de votre main autant de cartes Objet que vous le souhaitez dont le nom contient le mot « Ball ». Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Descarta de tu mano cualquier cantidad de cartas de Objeto que tengan la palabra “Ball” en su nombre. Este ataque hace 40 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Scarta un numero qualsiasi di carte Strumento con “Ball” nel nome dalla tua mano. Questo attacco infligge 40 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "Descarte qualquer número de cartas de Item que tenham a palavra \"Bola” em seu nome da sua mão. Este ataque causa 40 pontos de dano a mais para cada carta descartada desta forma.",
			de: "Lege beliebig viele Itemkarten, bei denen das Wort „Ball“ zum Namen gehört, aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 40 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Frost Smash",
			fr: "Impact Glacial",
			es: "Golpe Gélido",
			it: "Gelocolpo",
			pt: "Pancada Congelada",
			de: "Frostschlag"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card