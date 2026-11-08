import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Irida",
		'fr-fr': "Nacchara",
		'es-es': "Nákara",
		'it-it': "Perula",
		'de-de': "Perla",
		'pt-br': "Irida",
		'ko-kr': "주혜"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Heal 40 damage from each of your Pokémon that has any {W} Energy attached.",
		'fr-fr': "Soignez 40 dégâts de chacun de vos Pokémon auquel de l'Énergie {W} est attachée.",
		'es-es': "Cura 40 puntos de daño a cada uno de tus Pokémon que tenga alguna Energía {W} unida a él.",
		'it-it': "Cura ciascuno dei tuoi Pokémon che abbia delle Energie {W} assegnate da 40 danni.",
		'de-de': "Heile 40 Schadenspunkte bei jedem deiner Pokémon, an das mindestens 1 {W}-Energie angelegt ist.",
		'pt-br': "Cure 40 pontos de dano de cada um dos seus Pokémon que tiver alguma Energia {W} ligada.",
		'ko-kr': "{W}에너지가 붙어 있는 자신의 포켓몬 전원의 HP를 40회복."
	},

	trainerType: "Supporter"
}

export default card
