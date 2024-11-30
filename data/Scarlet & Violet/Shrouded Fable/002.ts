import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Galvantula",
		fr: "Mygavolt",
		es: "Galvantula",
		it: "Galvantula",
		pt: "Galvantula",
		de: "Voltula"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Compound Eyes",
			fr: "Œil Composé",
			es: "Ojo Compuesto",
			it: "Insettocchi",
			pt: "Olhos Compostos",
			de: "Facettenauge"
		},

		effect: {
			en: "Attacks used by this Pokémon do 50 more damage to your opponent's Active Pokémon that has an Ability (before applying Weakness and Resistance).",
			fr: "Les attaques utilisées par ce Pokémon infligent 50 dégâts supplémentaires au Pokémon Actif de votre adversaire ayant un talent (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques usados por este Pokémon hacen 50 puntos de daño más al Pokémon Activo de tu rival que tenga una habilidad (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi usati da questo Pokémon infliggono 50 danni in più al Pokémon attivo del tuo avversario che ha un'abilità, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques usados por este Pokémon causam 50 pontos de dano a mais ao Pokémon Ativo do seu oponente que tem uma Habilidade (antes de aplicar Fraqueza e Resistência).",
			de: "Die von diesem Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners, das eine Fähigkeit hat, 50 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Shocking Web",
			fr: "Toile Choquante",
			es: "Tela Electrizante",
			it: "Rete Fulminante",
			pt: "Teia Eletrizante",
			de: "Schockierendes Netz"
		},

		effect: {
			en: "If this Pokémon has any Lightning Energy attached, this attack does 80 more damage.",
			fr: "Si au moins une Énergie Lightning est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía Lightning unida, este ataque hace 80 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie Lightning assegnate, questo attacco infligge 80 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Lightning ligada a ele, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 Lightning-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
