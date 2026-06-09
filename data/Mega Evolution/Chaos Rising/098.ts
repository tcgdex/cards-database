import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886490,
				tcgplayer: 693454
			}
		},
	],

	name: {
		en: "Beedrill ex",
		fr: "Dardargnan-ex",
		es: "Beedrill ex",
		'es-mx': "Beedrill ex",
		de: "Bibor-ex",
		it: "Beedrill-ex",
		pt: "Beedrill ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [15],
	hp: 310,
	types: ["Grass"],

	evolveFrom: {
		en: "Kakuna"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Rumbling Bees",
			fr: "Abeilles Vrombissantes",
			es: "Abejas Ruidosas",
			'es-mx': "Abejas Ruidosas",
			de: "Bienenbande",
			it: "Api Rombanti",
			pt: "Abelhas Furiosas"
		},

		cost: ["Grass"],
		damage: "110×",

		effect: {
			en: "This attack does 110 damage for each of your Beedrill and Beedrill ex in play.",
			fr: "Cette attaque inflige 110 dégâts pour chacun de vos Dardargnan et Dardargnan-ex en jeu.",
			es: "Este ataque hace 110 puntos de daño por cada uno de tus Beedrill y Beedrill ex en juego.",
			'es-mx': "Este ataque hace 110 puntos de daño por cada uno de tus Beedrill y Beedrill ex en juego.",
			de: "Diese Attacke fügt für jedes deiner Bibor und Bibor-ex im Spiel 110 Schadenspunkte zu.",
			it: "Questo attacco infligge 110 danni per ciascuno dei tuoi Beedrill e Beedrill-ex in gioco.",
			pt: "Este ataque causa 110 pontos de dano para cada um dos seus Beedrill e Beedrill ex em jogo."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card
