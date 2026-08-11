import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [1016],
	set: Set,

	name: {
		'en-us': "Fezandipiti",
		'fr-fr': "Favianos",
		'es-es': "Fezandipiti",
		'pt-br': "Fezandipiti",
		'it-it': "Fezandipiti",
		'de-de': "Beatori"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Adrena-Pheromone",
			'fr-fr': "Adréna-Phéromone",
			'es-es': "Adrenalina Feromona",
			'pt-br': "Adrena-feromônio",
			'it-it': "Adrena-Feromone",
			'de-de': "Adrena-Pheromon"
		},

		effect: {
			'en-us': "If this Pokémon has any {D} Energy attached and is damaged by an attack, flip a coin. If heads, prevent that damage.",
			'fr-fr': "Si ce Pokémon a au moins une Énergie {D} attachée et qu'il subit les dégâts d'une attaque, lancez une pièce. Si c'est face, évitez ces dégâts.",
			'es-es': "Si este Pokémon tiene alguna Energía {D} unida y resulta dañado por un ataque, lanza 1 moneda. Si sale cara, se evita ese daño.",
			'pt-br': "Se este Pokémon tiver alguma Energia {D} ligada a ele e for danificado por um ataque, jogue uma moeda. Se sair cara, previna aquele dano.",
			'it-it': "Se questo Pokémon ha delle Energie {D} assegnate e viene danneggiato da un attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {D}-Energie angelegt ist und es durch eine Attacke Schaden erhält, wirf 1 Münze. Verhindere bei Kopf jenen Schaden."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Energy Feather",
			'fr-fr': "Plume Énergétique",
			'es-es': "Pluma Energía",
			'pt-br': "Pluma de Energia",
			'it-it': "Piuma Energetica",
			'de-de': "Energiefeder"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie attachée à ce Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía unida a este Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia ligada a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia assegnata a questo Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 30 Schadenspunkte zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	illustrator: "Kouki Saitou",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805434,
				tcgplayer: 610400
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805434,
				tcgplayer: 610400
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806468,
				tcgplayer: 610567
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806469,
				tcgplayer: 610668
			}
		},
	],
}

export default card
