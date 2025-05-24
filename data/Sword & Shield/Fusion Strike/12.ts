import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [556],
	set: Set,

	name: {
		en: "Maractus",
		fr: "Maracachi",
		es: "Maractus",
		it: "Maractus",
		pt: "Maractus",
		de: "Maracamba"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "0313",

	description: {
		en: "Once each year, this Pokémon scatters its seeds. They're jam-packed with nutrients, making them a precious food source out in the desert."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Peck",
			fr: "Picpic",
			de: "Pikser",
			es: "Picotazo",
			pt: "Bicada",
			it: "Beccata"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Ditch and Shake",
			fr: "Percussion Percutante",
			de: "Loswerden und Schütteln",
			es: "Descarte y Contoneo",
			pt: "Largar e Balançar",
			it: "Scarica e Scuoti"
		},

		damage: "50×",

		effect: {
			en: "Discard any number of Pokémon Tool cards from your hand. This attack does 50 damage for each card you discarded in this way.",
			fr: "Défaussez de votre main autant de cartes Outil Pokémon que vous le voulez. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			de: "Lege beliebig viele Pokémon-Ausrüstungen aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte zu.",
			es: "Descarta cualquier cantidad de cartas de Herramienta Pokémon de tu mano. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
			pt: "Descarte qualquer número de cartas de Ferramenta Pokémon da sua mão. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
			it: "Scarta un numero qualsiasi di carte Oggetto Pokémon che hai in mano. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card