import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Falinks",
		fr: "Hexadron",
		es: "Falinks",
		it: "Falinks",
		pt: "Falinks",
		de: "Legios"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Rapid Strike Squad",
			fr: "Brigade à Mille Poings",
			es: "Escuadrón Golpe Fluido",
			it: "Squadra Colpo Rapido",
			pt: "Esquadrão Golpe Fluido",
			de: "Fließender-Angriff-Trupp"
		},

		effect: {
			en: "This attack does 20 damage for each of your Rapid Strike Pokémon in play.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon Mille Poings en jeu.",
			es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon Golpe Fluido en juego.",
			it: "Questo attacco infligge 20 danni per ogni tuo Pokémon Colpo Rapido in gioco.",
			pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon Golpe Fluido em jogo.",
			de: "Diese Attacke fügt für jedes deiner Fließender-Angriff-Pokémon im Spiel 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658884
	}
}

export default card