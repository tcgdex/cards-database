import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [596],
	set: Set,

	name: {
		'en-us': "Galvantula",
		'fr-fr': "Mygavolt",
		'es-es': "Galvantula",
		'it-it': "Galvantula",
		'pt-br': "Galvantula",
		'de-de': "Voltula"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Joltik",
		'fr-fr': "Statitik",
		'es-es': "Joltik",
		'it-it': "Joltik",
		'pt-br': "Joltik",
		'de-de': "Wattzapf"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Compound Eyes",
			'fr-fr': "Œil Composé",
			'es-es': "Ojo Compuesto",
			'it-it': "Insettocchi",
			'pt-br': "Olhos Compostos",
			'de-de': "Facettenauge"
		},

		effect: {
			'en-us': "Attacks used by this Pokémon do 50 more damage to your opponent's Active Pokémon that has an Ability (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques utilisées par ce Pokémon infligent 50 dégâts supplémentaires au Pokémon Actif de votre adversaire ayant un talent (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques usados por este Pokémon hacen 50 puntos de daño más al Pokémon Activo de tu rival que tenga una habilidad (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi usati da questo Pokémon infliggono 50 danni in più al Pokémon attivo del tuo avversario che ha un'abilità, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques usados por este Pokémon causam 50 pontos de dano a mais ao Pokémon Ativo do seu oponente que tem uma Habilidade (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die von diesem Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners, das eine Fähigkeit hat, 50 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Shocking Web",
			'fr-fr': "Toile Choquante",
			'es-es': "Tela Electrizante",
			'it-it': "Rete Fulminante",
			'pt-br': "Teia Eletrizante",
			'de-de': "Schockierendes Netz"
		},

		effect: {
			'en-us': "If this Pokémon has any {L} Energy attached, this attack does 80 more damage.",
			'fr-fr': "Si au moins une Énergie {L} est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía {L} unida, este ataque hace 80 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie {L} assegnate, questo attacco infligge 80 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia {L} ligada a ele, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {L}-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "mashu",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780890,
				tcgplayer: 560312
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780890,
				tcgplayer: 560312
			}
		},
	],
}

export default card
