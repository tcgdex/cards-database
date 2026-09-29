import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide."
	},

	name: {
		en: "Mew",
		fr: "Mew",
		de: "Mew",
		es: "Mew",
		it: "Mew",
		'es-mx': "Mew",
		pt: "Mew"
	},

	illustrator: "YOSHIROTTEN",
	rarity: "RGB Rare",
	category: "Pokemon",
	dexId: [151],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Psychic",
			fr: "Psyko",
			de: "Psychokinese",
			es: "Psíquico",
			it: "Psichico",
			'es-mx': "Fuerza Psíquica",
			pt: "Psíquico"
		},

		effect: {
			en: "This attack does 40 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 40 Schadenspunkte mehr zu.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente."
		},

		damage: "10+",
		cost: ["Psychic", "Psychic"]
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
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 909511,
				tcgplayer: 717609
			}
		}
	],
}

export default card
